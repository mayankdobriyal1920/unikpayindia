export const loginUserQuery = () => {
    return `
        SELECT
            app_user.id,
            app_user.name,
            app_user.profile_url,
            app_user.role,
            app_user.phone_number,
            JSON_OBJECT(
                    'id', sub_admin_users.id,
                    'name', sub_admin_users.name,
                    'profile_picture', sub_admin_users.profile_url,
                    'role', sub_admin_users.role,
                    'phone_number', sub_admin_users.phone_number
            ) AS sub_admin
        FROM app_user
                 LEFT JOIN app_user AS sub_admin_users
                           ON sub_admin_users.id = app_user.created_by
        WHERE app_user.phone_number = ?;
    `;
};

export const actionToGetTransactionDetailsApiCallQuery = () => {
    return `SELECT id, amount, status, end_user_phone, operator, circle, order_id, completed_at, transaction_id, signature_id, transactionType, customer_id FROM transaction WHERE user_id = ? AND status IN ('success', 'failed') ORDER BY completed_at DESC`

}

export const actionToGetLpgBookingTransactionDetailQuery = () =>{
    return `
        SELECT id, amount, payment_status, mobile_number, transaction_id, created_at, preferred_date,booking_type, provider, consumer_number FROM lpg_bookings_transaction WHERE user_id = ?
    `
}

export const actionToGetTransactionHistoryRequestQuery = () => {
    return `
        SELECT id, amount, status, email_id, transaction_id, completed_at, policy_number,transactionType,dob
        FROM transaction WHERE user_id =  ? AND transactionType =  ?
    `
}


export const checkMobNumberAlreadyExistQuery = () => {
    return `
        SELECT
            app_user.id,
            app_user.name
        FROM app_user
        WHERE app_user.phone_number = ?;
    `;
};

export const getUserByIdQuery = () => {
    return `
        SELECT
            app_user.id,
            app_user.name,
            app_user.profile_url,
            app_user.role,
            app_user.phone_number,
            JSON_OBJECT(
                    'id', sub_admin_users.id,
                    'name', sub_admin_users.name,
                    'profile_picture', sub_admin_users.profile_url,
                    'role', sub_admin_users.role,
                    'phone_number', sub_admin_users.phone_number
            ) AS sub_admin
        FROM app_user
                 LEFT JOIN app_user AS sub_admin_users
                           ON sub_admin_users.id = app_user.created_by
        WHERE app_user.id = ?
    `;
};