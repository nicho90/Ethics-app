UPDATE Members SET (
    email_address,
    title,
    first_name,
    last_name,
    working_group_id,
    office_room_number,
    office_phone_number,
    office_email_address,
    subscribed,
    former,
    admin,
    password
) = (
    $2::TEXT,
    $3::TEXT,
    $4::TEXT,
    $5::TEXT,
    $6::INTEGER,
    $7::TEXT,
    $8::TEXT,
    $9::TEXT,
    $10::BOOLEAN,
    $11::BOOLEAN,
    $12::BOOLEAN,
    crypt($13::TEXT, gen_salt('md5'))
)
WHERE
    member_id=$1::INTEGER
RETURNING
    member_id,
    created,
    updated,
    email_address,
    title,
    first_name,
    last_name,
    working_group_id,
    office_room_number,
    office_phone_number,
    office_email_address,
    admin,
    subscribed,
    former,
    admin
;