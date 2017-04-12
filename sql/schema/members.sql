DROP TABLE IF EXISTS Members CASCADE;

-- SCHEMA
CREATE TABLE Members (

    -- General
    member_id SERIAL PRIMARY KEY,
    created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),

    -- Attributes
    email_address CHARACTER VARYING(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    title CHARACTER VARYING(255) DEFAULT NULL,
    first_name CHARACTER VARYING(255) NOT NULL,
    last_name CHARACTER VARYING(255) NOT NULL,
    university_id INTEGER NOT NULL REFERENCES Universities(university_id) ON UPDATE CASCADE ON DELETE CASCADE,
    institute_id INTEGER NOT NULL REFERENCES Institutes(institute_id) ON UPDATE CASCADE ON DELETE CASCADE,
    working_group_id INTEGER NOT NULL REFERENCES Working_Groups(working_group_id) ON UPDATE CASCADE ON DELETE CASCADE,
    office_room_number CHARACTER VARYING(255) DEFAULT NULL,
    office_phone_number CHARACTER VARYING(255) DEFAULT NULL,
    office_email_address CHARACTER VARYING(255) DEFAULT NULL,
    admin BOOLEAN DEFAULT false NOT NULL,
    subscribed BOOLEAN DEFAULT true NOT NULL,
    former BOOLEAN DEFAULT false NOT NULL,
    fails SMALLINT DEFAULT 0 NOT NULL

);
