DROP INDEX IF EXISTS public.api_has_sponsor_id_ef0d3480;
DROP INDEX IF EXISTS public.api_has_team_id_b953b32a;
DROP INDEX IF EXISTS public."api_footballteam_teamName_9a6322a9_like";
DROP INDEX IF EXISTS public.api_player_team_id_df5bf8ad;
DROP INDEX IF EXISTS public.api_sponsor_name_52390f2d_like;

ALTER TABLE api_footballteam DISABLE TRIGGER ALL;
ALTER TABLE api_has DISABLE TRIGGER ALL;
ALTER TABLE api_player DISABLE TRIGGER ALL;
ALTER TABLE api_sponsor DISABLE TRIGGER ALL;

delete from api_footballteam;
delete from api_has;
delete from api_player;
delete from api_sponsor;

ALTER TABLE api_footballteam ENABLE TRIGGER ALL;
ALTER TABLE api_has ENABLE TRIGGER ALL;
ALTER TABLE api_player ENABLE TRIGGER ALL;
ALTER TABLE api_sponsor ENABLE TRIGGER ALL;

SELECT setval(pg_get_serial_sequence('api_footballteam', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('api_has', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('api_player', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('api_sponsor', 'id'), 1, false);

DO language plpgsql $$
BEGIN
  RAISE NOTICE 'hello, world!';
END
$$;


-- Batch insert 10000 football teams at a time
DO $$
DECLARE
  batch_size INTEGER := 10000;
BEGIN
  FOR i IN 0..99 LOOP
    INSERT INTO api_footballteam (name, nickname, "foundingYear", value, "professionalStatus")
    SELECT
      'Team ' || s.id,
      'Nickname ' || s.id,
      1900 + (s.id % 100),
      100000 + (s.id * 1000),
      CASE
        WHEN s.id % 3 = 0 THEN 'Amateur'
        WHEN s.id % 3 = 1 THEN 'Professional'
        ELSE 'Semi-Professional'
      END
    FROM generate_series((i * batch_size) + 1, (i+1) * batch_size) s(id);
  END LOOP;
END$$;

DO language plpgsql $$
BEGIN
  RAISE NOTICE 'hello, world!';
END
$$;

-- Insert 1 million players, with random team assignments
INSERT INTO api_player (name, number, age, rating, position, nationality, team_id)
SELECT
  'Player ' || s.id,
  s.id % 99 + 1,
  18 + (s.id % 10),
  50 + (s.id % 50),
  CASE WHEN s.id % 2 = 0 THEN 'Substitute' ELSE 'Starter' END,
  'Nationality ' || (s.id % 100),
  (random() * 999999 + 1)::integer  -- random team assignment
FROM generate_series(1, 1000000) s(id);

DO language plpgsql $$
BEGIN
  RAISE NOTICE 'hello, world!';
END
$$;
-- Insert 1 million sponsors
INSERT INTO api_sponsor (name, "foundingYear", nationality, "netWorth", domain)
SELECT
  'Sponsor ' || s.id,
  1900 + (s.id % 100),
  'Nationality ' || (s.id % 100),
  100000 + (s.id * 1000),
  'Domain ' || s.id
FROM generate_series(1, 1000000) s(id);

DO language plpgsql $$
BEGIN
  RAISE NOTICE 'hello, world!';
END
$$;

DO $$
BEGIN
  FOR i IN 0..999 LOOP
    INSERT INTO api_has ("dealValue", type, team_id, sponsor_id)
    SELECT
      100000 + ((i * 10000) + s.id) * 100,
      CASE WHEN (i * 10000) + s.id % 2 = 0 THEN 'Type A' ELSE 'Type B' END,
      (random() * 999999 + 1)::INTEGER,
      (random() * 999999 + 1)::INTEGER
    FROM generate_series(1, 10000) s(id);
    -- Print progress after each batch
    RAISE NOTICE 'Inserted % records', (i+1) * 10000;
    COMMIT;
  END LOOP;
END$$;