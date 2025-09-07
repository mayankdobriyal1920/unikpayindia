-- --------------------------------------------------------
-- Host:                         178.16.138.111
-- Server version:               8.4.2 - Source distribution
-- Server OS:                    Linux
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table unikpayindia.app_user
CREATE TABLE IF NOT EXISTS `app_user` (
  `id` varchar(255) NOT NULL COMMENT 'Unique user identifier',
  `name` varchar(255) DEFAULT NULL COMMENT 'User display name',
  `phone_number` varchar(255) NOT NULL COMMENT 'Primary contact number',
  `profile_url` varchar(255) DEFAULT NULL COMMENT 'Profile picture URL',
  `otp` varchar(255) DEFAULT NULL COMMENT 'One-time password',
  `password` varchar(255) NOT NULL COMMENT 'Hashed password',
  `role` smallint NOT NULL DEFAULT '4' COMMENT '1=admin, 2=master_distributor, 3=distributor, 4=retailer',
  `email` varchar(100) DEFAULT NULL COMMENT 'Email address',
  `parent_id` varchar(255) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL COMMENT 'Legal full name',
  `address` text COMMENT 'Physical address',
  `pan_number` varchar(10) DEFAULT NULL COMMENT 'PAN card number',
  `aadhaar_number` varchar(12) DEFAULT NULL COMMENT 'Aadhaar number',
  `gst_number` varchar(15) DEFAULT NULL COMMENT 'GST identification',
  `bank_account_number` varchar(20) DEFAULT NULL COMMENT 'Bank account details',
  `bank_name` varchar(50) DEFAULT NULL COMMENT 'Bank name',
  `ifsc_code` varchar(11) DEFAULT NULL COMMENT 'IFSC code',
  `kyc_status` varchar(20) DEFAULT 'pending' COMMENT 'KYC verification status',
  `kyc_verified_at` timestamp NULL DEFAULT NULL COMMENT 'KYC approval timestamp',
  `is_active` tinyint(1) DEFAULT '1' COMMENT 'Account active status',
  `is_test_user` smallint DEFAULT '0' COMMENT '1=test account, 0=production',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Record creation time',
  `created_by` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_number` (`phone_number`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_app_user_role` (`role`),
  KEY `idx_app_user_parent` (`parent_id`),
  KEY `idx_app_user_phone` (`phone_number`),
  KEY `idx_app_user_created_by` (`created_by`),
  KEY `idx_app_user_kyc_status` (`kyc_status`),
  CONSTRAINT `app_user_chk_1` CHECK ((`role` between 1 and 4)),
  CONSTRAINT `app_user_chk_2` CHECK ((`kyc_status` in (_utf8mb3'pending',_utf8mb3'approved',_utf8mb3'rejected')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='System users with hierarchical roles';

-- Dumping data for table unikpayindia.app_user: ~5 rows (approximately)
INSERT INTO `app_user` (`id`, `name`, `phone_number`, `profile_url`, `otp`, `password`, `role`, `email`, `parent_id`, `full_name`, `address`, `pan_number`, `aadhaar_number`, `gst_number`, `bank_account_number`, `bank_name`, `ifsc_code`, `kyc_status`, `kyc_verified_at`, `is_active`, `is_test_user`, `created_at`, `created_by`, `updated_at`) VALUES
	('0cbc9cb3-0c71-11f0-bc6f-bc24113b30e1', 'System Admin', '9999999999', NULL, NULL, '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYV5ZYZ5J/gS2qL7p97Bq7F7QzGQwK', 1, 'admin@example.com', NULL, 'Super Administrator', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pending', NULL, 1, 1, '2025-03-29 07:40:13', NULL, '2025-03-29 07:40:13'),
	('213-asdsa-34534', 'Mayank', '7017935899', 'https://example.com/profiles/mayank.jpg', NULL, '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYV5ZYZ5J/gS2qL7p97Bq7F7QzGQwK', 4, 'mayankdobriyal1920@gmail.com', '0cbc9cb3-0c71-11f0-bc6f-bc24113b30e1', 'Mayank Dobriyal', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pending', NULL, 1, 1, '2025-03-29 07:42:03', NULL, '2025-03-29 07:43:19'),
	('312ba57e-0c71-11f0-bc6f-bc24113b30e1', 'Master Distributor', '8888888888', NULL, NULL, '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYV5ZYZ5J/gS2qL7p97Bq7F7QzGQwK', 2, 'master@example.com', '0cbc9cb3-0c71-11f0-bc6f-bc24113b30e1', 'Regional Master', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pending', NULL, 1, 1, '2025-03-29 07:41:14', NULL, '2025-03-29 07:41:14'),
	('4e6ea32f-0c71-11f0-bc6f-bc24113b30e1', 'Local Distributor', '7777777777', NULL, NULL, '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYV5ZYZ5J/gS2qL7p97Bq7F7QzGQwK', 3, 'distributor@example.com', '0cbc9cb3-0c71-11f0-bc6f-bc24113b30e1', 'Area Distributor', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pending', NULL, 1, 1, '2025-03-29 07:42:03', NULL, '2025-03-29 07:42:03'),
	('4e842553-0c71-11f0-bc6f-bc24113b30e1', 'Test Retailer', '9876543210', NULL, NULL, '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYV5ZYZ5J/gS2qL7p97Bq7F7QzGQwK', 4, 'retailer@example.com', '0cbc9cb3-0c71-11f0-bc6f-bc24113b30e1', 'Test Retail User', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pending', NULL, 1, 1, '2025-03-29 07:42:03', NULL, '2025-03-29 07:42:03');

-- Dumping structure for table unikpayindia.audit_log
CREATE TABLE IF NOT EXISTS `audit_log` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `action` varchar(50) NOT NULL,
  `entity_type` varchar(50) DEFAULT NULL,
  `entity_id` varchar(255) DEFAULT NULL,
  `old_values` text,
  `new_values` text,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.audit_log: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.commission_plan
CREATE TABLE IF NOT EXISTS `commission_plan` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `is_active` tinyint(1) DEFAULT '1',
  `created_by` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.commission_plan: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.commission_slab
CREATE TABLE IF NOT EXISTS `commission_slab` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `plan_id` int DEFAULT NULL,
  `from_amount` decimal(12,2) DEFAULT '0.00',
  `to_amount` decimal(12,2) DEFAULT NULL,
  `admin_percentage` decimal(5,2) NOT NULL,
  `master_distributor_percentage` decimal(5,2) NOT NULL,
  `distributor_percentage` decimal(5,2) NOT NULL,
  `retailer_percentage` decimal(5,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.commission_slab: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.fund_transfer
CREATE TABLE IF NOT EXISTS `fund_transfer` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `sender_id` varchar(255) DEFAULT NULL,
  `receiver_id` varchar(255) DEFAULT NULL,
  `amount` decimal(12,2) NOT NULL,
  `status` varchar(20) DEFAULT 'pending',
  `reference_number` varchar(50) DEFAULT NULL,
  `initiated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `completed_at` timestamp NULL DEFAULT NULL,
  `notes` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `reference_number` (`reference_number`),
  CONSTRAINT `fund_transfer_chk_1` CHECK ((`status` in (_utf8mb4'pending',_utf8mb4'completed',_utf8mb4'failed',_utf8mb4'reversed')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.fund_transfer: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.lpg_bookings_transaction
CREATE TABLE IF NOT EXISTS `lpg_bookings_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mobile_number` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `provider` enum('Indane','HP','Bharat') NOT NULL,
  `consumer_number` varchar(20) NOT NULL,
  `booking_type` enum('Refill','New Connection') NOT NULL,
  `address` text NOT NULL,
  `preferred_date` date DEFAULT NULL,
  `time_slot` enum('Morning','Evening','Any') DEFAULT NULL,
  `payment_id` varchar(100) DEFAULT NULL,
  `payment_status` enum('Pending','Paid','Failed') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `order_id` text,
  `user_id` varchar(255) DEFAULT NULL,
  `transaction_id` text,
  `signature_id` text,
  `amount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.lpg_bookings_transaction: ~3 rows (approximately)
INSERT INTO `lpg_bookings_transaction` (`id`, `mobile_number`, `provider`, `consumer_number`, `booking_type`, `address`, `preferred_date`, `time_slot`, `payment_id`, `payment_status`, `created_at`, `order_id`, `user_id`, `transaction_id`, `signature_id`, `amount`) VALUES
	(1, '9634709277', 'Indane', '123456', 'Refill', 'Delhi', '2025-08-13', 'Morning', NULL, 'Paid', '2025-08-04 15:40:52', 'order_R1JIIFT4Ef4ghi', '213-asdsa-34534', 'pay_R1JIVlx1WYafeI', '2759dcce90018138c743c9c80a11f99f6e5cce7a4d215853d6eb29e49c001a56', 950),
	(2, '9634709277', 'Indane', '123456', 'Refill', 'Delhi', '2025-08-12', 'Evening', NULL, 'Paid', '2025-08-04 16:10:18', 'order_R1JnOWxbwFsVSO', '213-asdsa-34534', 'pay_R1JnbtQoieLqmQ', 'd2f191771fdc57bb45f9eea228ef3d1dddb79155db4d0884c7a96b1ff32296c4', 950),
	(3, '9634709277', 'Bharat', '123456', 'Refill', 'Delhi', '2025-08-13', 'Morning', NULL, 'Paid', '2025-08-04 16:37:32', 'order_R1KG7NjowtGjgJ', '213-asdsa-34534', 'pay_R1KGNL6zG3htNp', '98d6640209faa8301dc1f199ea170b619204488c113e276d4d0646fd8229b649', 950);

-- Dumping structure for table unikpayindia.service
CREATE TABLE IF NOT EXISTS `service` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `service_code` varchar(20) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `min_amount` decimal(10,2) DEFAULT NULL,
  `max_amount` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `service_code` (`service_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.service: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.service_category
CREATE TABLE IF NOT EXISTS `service_category` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.service_category: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(255) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table unikpayindia.sessions: ~52 rows (approximately)
INSERT INTO `sessions` (`session_id`, `data`, `expires`) VALUES
	('2m0wc1Gg3owYbLae44UCHQgYQYFIsyPS', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T07:51:59.103Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1774253498),
	('2m0wc1Gg3owYbLae44UCHQgYQYFIsyPS', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T07:51:59.111Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1774253498),
	('27TYD08-bbHCiwZfwZPqSvm90ObZ30hy', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T08:30:22.424Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1776961398),
	('27TYD08-bbHCiwZfwZPqSvm90ObZ30hy', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T08:30:22.430Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1776961398),
	('b6WFLwyFzB5lzWhw-uqOqQCbB2VHXegX', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T08:30:22.915Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1788661181),
	('b6WFLwyFzB5lzWhw-uqOqQCbB2VHXegX', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T08:30:22.920Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1788661181),
	('BwKy9ffpu3Tn7dEoqdtnBEyuiYMPtnLv', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T08:35:09.954Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1784325511),
	('BwKy9ffpu3Tn7dEoqdtnBEyuiYMPtnLv', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-23T08:35:09.957Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1784325511),
	('BWyrGfWjjhvhRDK3YpK690o8qFbR62Cd', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-24T12:53:32.033Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1786622757),
	('BWyrGfWjjhvhRDK3YpK690o8qFbR62Cd', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-24T12:53:32.050Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1786622757),
	('79cVJtFCUTRfr1V30zx0YlZbQcT1rBGn', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-29T06:31:36.814Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1774867086),
	('79cVJtFCUTRfr1V30zx0YlZbQcT1rBGn', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-29T06:31:36.831Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1774867086),
	('bZqtjqqAqExloG5wOyN42gd-zj2Qi64E', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-29T06:45:09.673Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1776863803),
	('bZqtjqqAqExloG5wOyN42gd-zj2Qi64E', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-29T06:45:09.680Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","profile_url":null,"role":3,"phone_number":"7017935899","sub_admin":{"id":"213-asdsa-34534","name":"Mayank Dobriyal","role":3,"phone_number":"7017935899","profile_picture":null}}}', 1776863803),
	('5jtLCxm9yYheWFghfhZn8c9gZNQSaPnB', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-30T14:21:59.502Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1784524032),
	('5jtLCxm9yYheWFghfhZn8c9gZNQSaPnB', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-03-30T14:21:59.512Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1784524032),
	('Pk0BWjFgVs7S4wG42oPKQRl9-wzKaJNq', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-08T09:50:15.698Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1775641815),
	('Pk0BWjFgVs7S4wG42oPKQRl9-wzKaJNq', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-08T09:50:15.701Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1775641816),
	('leBYwBQt3sUOuOAryRAWHmYf0DRPxeNF', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-13T10:28:41.706Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776512289),
	('leBYwBQt3sUOuOAryRAWHmYf0DRPxeNF', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-13T10:28:41.752Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776512289),
	('xtIl4qFLZPac2mLpN8qfVhQm59NXGBol', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-15T11:56:48.988Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777981009),
	('xtIl4qFLZPac2mLpN8qfVhQm59NXGBol', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-15T11:56:48.965Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777981009),
	('z6GL7BnOl7e2TAPVgavqYHosYEKhAjpO', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-18T12:00:34.132Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776696489),
	('z6GL7BnOl7e2TAPVgavqYHosYEKhAjpO', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-18T12:00:34.142Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776696489),
	('82bhZD0CtJKehpFhf-FRyYgXNbUprr4M', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-20T10:16:36.122Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1778221399),
	('82bhZD0CtJKehpFhf-FRyYgXNbUprr4M', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-20T10:16:36.135Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1778221399),
	('ZNQqB_RqKTxxYdsfPgSnORdlxQGvAmSh', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-22T12:41:58.860Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776958429),
	('ZNQqB_RqKTxxYdsfPgSnORdlxQGvAmSh', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-22T12:41:58.862Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776958429),
	('pJzm4wSbR7cjz1-qi7dE09vHR_-f-0It', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-22T14:20:34.840Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1782720997),
	('pJzm4wSbR7cjz1-qi7dE09vHR_-f-0It', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-22T14:20:34.862Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1782720997),
	('Ir1bPxWds0W2bHuxSsnzLAA8f4JUc43E', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-22T14:53:06.382Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776869586),
	('Ir1bPxWds0W2bHuxSsnzLAA8f4JUc43E', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-22T14:53:06.385Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776869586),
	('DARaqVl4rULe2qHKrI3229AWYCVuVont', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T05:57:04.464Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776925942),
	('DARaqVl4rULe2qHKrI3229AWYCVuVont', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T05:57:04.485Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776925942),
	('1Rbt2vwKLAJ5DibVZ19lizxvLLPyqnO6', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T06:30:38.237Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776945264),
	('1Rbt2vwKLAJ5DibVZ19lizxvLLPyqnO6', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T06:30:38.241Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776945264),
	('IAg-S3ufRwrjpQ3Bkd59F_XMqY48PFiS', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T07:19:47.138Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776938426),
	('IAg-S3ufRwrjpQ3Bkd59F_XMqY48PFiS', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T07:19:47.151Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1776938426),
	('eCQS24iYqceVPBqiEDW9eIgANtgpL5Tj', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T14:13:51.851Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777030049),
	('eCQS24iYqceVPBqiEDW9eIgANtgpL5Tj', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-23T14:13:51.854Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777030049),
	('LOKB4iPgEvAY-ar5s9rsmMlqpUWxVjMS', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-24T06:24:47.362Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777198984),
	('LOKB4iPgEvAY-ar5s9rsmMlqpUWxVjMS', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-24T06:24:47.392Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777198984),
	('OxkPtPa5xrfnDgOZ5SnBzg9kDVYLL2fl', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-25T06:53:16.227Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1787817955),
	('OxkPtPa5xrfnDgOZ5SnBzg9kDVYLL2fl', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-25T06:53:16.291Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1787817955),
	('4VyarJYhg4GEPm2CL2Pd8RnSafBgI31i', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-26T10:52:25.191Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777481503),
	('4VyarJYhg4GEPm2CL2Pd8RnSafBgI31i', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-04-26T10:52:25.195Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1777481503),
	('ITfePaLHqy-kXqDDC4qkgrxVDze-goIp', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-07-14T13:25:58.430Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1786372682),
	('ITfePaLHqy-kXqDDC4qkgrxVDze-goIp', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-07-14T13:25:58.458Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1786372682),
	('-M4svufy0S9zJZ6LCK4S1Qmzc7cL_LpM', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-07-16T15:22:03.649Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1786463487),
	('-M4svufy0S9zJZ6LCK4S1Qmzc7cL_LpM', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-07-16T15:22:03.653Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1786463487),
	('hOGyVAvFO9lVsjQmsaaIoKYs54MdkyTz', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-07-16T17:27:35.782Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1784646600),
	('hOGyVAvFO9lVsjQmsaaIoKYs54MdkyTz', '{"cookie":{"originalMaxAge":31536000000,"expires":"2026-07-16T17:27:35.787Z","secure":true,"httpOnly":true,"path":"/","sameSite":"None"},"userSessionData":{"id":"213-asdsa-34534","name":"Mayank","profile_url":"https://example.com/profiles/mayank.jpg","role":4,"phone_number":"7017935899","sub_admin":{"id":null,"name":null,"role":null,"phone_number":null,"profile_picture":null}}}', 1784646600);

-- Dumping structure for table unikpayindia.settlement_cycle
CREATE TABLE IF NOT EXISTS `settlement_cycle` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `frequency` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'pending',
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `processed_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  CONSTRAINT `settlement_cycle_chk_1` CHECK ((`frequency` in (_utf8mb4'daily',_utf8mb4'weekly',_utf8mb4'monthly',_utf8mb4'manual'))),
  CONSTRAINT `settlement_cycle_chk_2` CHECK ((`status` in (_utf8mb4'pending',_utf8mb4'processing',_utf8mb4'completed',_utf8mb4'failed')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.settlement_cycle: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.transaction
CREATE TABLE IF NOT EXISTS `transaction` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `reference_number` varchar(50) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `end_user_phone` varchar(15) DEFAULT NULL,
  `service_id` int DEFAULT NULL,
  `amount` decimal(12,2) NOT NULL,
  `status` varchar(20) NOT NULL,
  `provider_reference` varchar(100) DEFAULT NULL,
  `initiated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `completed_at` timestamp NULL DEFAULT NULL,
  `commission_calculated` tinyint(1) DEFAULT '0',
  `operator` text,
  `transaction_id` text,
  `order_id` text,
  `signature_id` text,
  `circle` varchar(300) DEFAULT NULL,
  `transactionType` varchar(100) DEFAULT NULL,
  `customer_id` text,
  `dob` varchar(150) DEFAULT NULL,
  `email_id` varchar(300) DEFAULT NULL,
  `policy_number` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `reference_number` (`reference_number`),
  CONSTRAINT `transaction_chk_1` CHECK ((`status` in (_utf8mb4'pending',_utf8mb4'success',_utf8mb4'failed',_utf8mb4'refunded')))
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.transaction: ~16 rows (approximately)
INSERT INTO `transaction` (`id`, `reference_number`, `user_id`, `end_user_phone`, `service_id`, `amount`, `status`, `provider_reference`, `initiated_at`, `completed_at`, `commission_calculated`, `operator`, `transaction_id`, `order_id`, `signature_id`, `circle`, `transactionType`, `customer_id`, `dob`, `email_id`, `policy_number`) VALUES
	(10, NULL, '213-asdsa-34534', '9634709277', NULL, 200.00, 'success', NULL, '2025-07-20 17:44:44', '2025-07-20 17:45:16', 0, 'BS', 'pay_QvPP6nocav7cqr', 'order_QvPOmwuxdG74U1', '5e29829ff50bc2cc7a39b84c9f569eb9a5f5c46253e557c424f0fc98a4bd511d', 'Jammu & Kashmir', NULL, NULL, NULL, NULL, NULL),
	(11, NULL, '213-asdsa-34534', '9634709277', NULL, 200.00, 'pending', NULL, '2025-07-20 17:46:16', NULL, 0, 'VF', NULL, 'order_QvPQP9cwjvcLfA', NULL, 'North East', NULL, NULL, NULL, NULL, NULL),
	(13, NULL, '213-asdsa-34534', '9634709277', NULL, 200.00, 'success', NULL, '2025-07-20 17:57:38', '2025-07-20 17:58:08', 0, 'VF', 'pay_QvPchrCwFTAqQN', 'order_QvPcPMac2UOXGs', '197ea2a1ca7d13d3bad2fb67679ea78608afce17d09f9b65f482d4e38d10694b', 'Maharashtra & Goa', NULL, NULL, NULL, NULL, NULL),
	(15, NULL, '213-asdsa-34534', '9634709277', NULL, 349.00, 'success', NULL, '2025-07-21 15:00:39', '2025-07-21 15:01:07', 0, 'RJ', 'pay_Qvl8q9Cm6UVEKe', 'order_Qvl8ZzTIp7bQPu', '0cfc733b6a859f2552c5410762e56d75a048bd0aac410b03820a7e7b1d47848c', 'Delhi', NULL, NULL, NULL, NULL, NULL),
	(16, NULL, '213-asdsa-34534', '7067656544', NULL, 900.00, 'success', NULL, '2025-07-21 15:09:21', '2025-07-21 15:10:00', 0, 'AT', 'pay_QvlIDpq5OI8VRY', 'order_QvlHlbO0c38IAQ', '0d9e8b61f0e5d371ba0f4aefd7c5f3e287d6f77999a4cc5de68b0d305404ef33', 'North East', NULL, NULL, NULL, NULL, NULL),
	(17, NULL, '213-asdsa-34534', NULL, NULL, 499.00, 'success', NULL, '2025-07-29 16:35:14', '2025-07-24 18:17:45', 0, 'airtel_digital', 'pay_Qx05uo5XKwuXcC', 'order_Qx05hjnQlCCjmE', 'f9126ae6495d923ec6ebb8970de3b42a4fecf8198802aaa5ada158ed804813d0', NULL, 'dth_recharge', '1112323', NULL, NULL, NULL),
	(18, NULL, '213-asdsa-34534', NULL, NULL, 999.00, 'success', NULL, '2025-07-30 15:41:26', '2025-07-30 15:41:26', 0, 'sundirect', 'pay_QzKdWG0mbDnlZc', 'order_QzKdIRYUJkHvmS', '520c4da4921016eae6b7ccf53fd1a7a97f7739df609ffc36e2dc71f78d5cab61', NULL, 'dth_recharge', '12234223', NULL, NULL, NULL),
	(19, NULL, '213-asdsa-34534', NULL, NULL, 9999.00, 'success', NULL, '2025-07-30 15:46:14', '2025-07-30 15:46:14', 0, 'tata_sky', 'pay_QzKiaH17qyrg75', 'order_QzKi4E796R9iXK', '2b1b45f3cdc6255ba80263b5fc29318819ae68504cc1f4a02a1ce4bd8f111ec4', NULL, 'dth_recharge', '12321321', NULL, NULL, NULL),
	(20, NULL, '213-asdsa-34534', NULL, NULL, 500.00, 'success', NULL, '2025-07-30 16:12:29', '2025-07-30 16:12:29', 0, 'dd_free_dish', 'pay_QzLAJy0pwO78Qj', 'order_QzLA2gRAKDK3gu', 'e59e7e0102e853f5ca86dbcb4f13b9b0d177abfba54b07a2281c7a3b8fa16e0b', NULL, 'dth_recharge', '3457676', NULL, NULL, NULL),
	(21, NULL, '213-asdsa-34534', NULL, NULL, 399.00, 'success', NULL, '2025-08-03 17:03:41', '2025-08-03 17:03:41', 0, 'airtel_digital', 'pay_R0wAsJH6JbdaUP', 'order_R0wAZZ0q0Rwp0x', '2336eafdcb9cbc6490338b6c6ef7124736355da7bcaf05d5c877d2983849a870', NULL, 'dth_recharge', '12345', NULL, NULL, NULL),
	(22, NULL, '213-asdsa-34534', NULL, NULL, 299.00, 'success', NULL, '2025-08-03 17:06:18', '2025-08-03 17:06:18', 0, 'dd_free_dish', 'pay_R0wDVkq314WNSw', 'order_R0wDHbqwL87FWd', 'a946dcb9b1dbd2b386978737e8fa1c5890a48ae28c6c63a50d71f15349515de7', NULL, 'dth_recharge', '123456', NULL, NULL, NULL),
	(23, NULL, '213-asdsa-34534', NULL, NULL, 799.00, 'success', NULL, '2025-08-03 17:08:43', '2025-08-03 17:08:44', 0, 'dishtv', 'pay_R0wGB2g0DTHNP6', 'order_R0wFu3wy1BsZtV', '4c7949b3b1ec3f904ac749e347e832d179cda89887783ff70af385071848e472', NULL, 'dth_recharge', '123456', NULL, NULL, NULL),
	(29, NULL, '213-asdsa-34534', NULL, NULL, 999.00, 'success', NULL, '2025-08-08 17:10:33', '2025-08-08 17:10:34', 0, NULL, 'pay_R2uxk8v2QdDbiY', 'order_R2uxUaaqrCyHUQ', '2e3b13c9fd999e6d62fd39224011baf1959c935ddf85cf5d38aab4f5e21ae934', NULL, 'lic_policy', NULL, '2025-08-03', 'test@gmail.com', '1234567'),
	(30, NULL, '213-asdsa-34534', '8287575451', NULL, 250.00, 'pending', NULL, '2025-08-09 02:52:12', NULL, 0, 'AT', NULL, 'order_R34sO2iWUPTpYD', NULL, 'Delhi', 'mobile_recharge', NULL, NULL, NULL, NULL),
	(31, NULL, '213-asdsa-34534', '7053576211', NULL, 299.00, 'pending', NULL, '2025-08-10 07:15:22', NULL, 0, 'AT', NULL, 'order_R3XtUu7NPfTTM3', NULL, 'West Bengal', 'mobile_recharge', NULL, NULL, NULL, NULL),
	(32, NULL, '213-asdsa-34534', '7053576211', NULL, 199.00, 'pending', NULL, '2025-08-27 08:05:05', NULL, 0, 'VF', NULL, 'order_RAHp44eCNQ0cyg', NULL, 'Kolkata', 'mobile_recharge', NULL, NULL, NULL, NULL);

-- Dumping structure for table unikpayindia.transaction_commission
CREATE TABLE IF NOT EXISTS `transaction_commission` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `transaction_id` int DEFAULT NULL,
  `admin_commission` decimal(12,2) DEFAULT '0.00',
  `master_distributor_commission` decimal(12,2) DEFAULT '0.00',
  `distributor_commission` decimal(12,2) DEFAULT '0.00',
  `retailer_commission` decimal(12,2) DEFAULT '0.00',
  `calculated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `distributed` tinyint(1) DEFAULT '0',
  `distributed_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.transaction_commission: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.user_settlement
CREATE TABLE IF NOT EXISTS `user_settlement` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `cycle_id` int DEFAULT NULL,
  `total_amount` decimal(12,2) NOT NULL,
  `total_commission` decimal(12,2) NOT NULL,
  `settlement_amount` decimal(12,2) NOT NULL,
  `status` varchar(20) DEFAULT 'pending',
  `reference_number` varchar(50) DEFAULT NULL,
  `initiated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `completed_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  CONSTRAINT `user_settlement_chk_1` CHECK ((`status` in (_utf8mb4'pending',_utf8mb4'processed',_utf8mb4'paid',_utf8mb4'failed')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.user_settlement: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.wallet
CREATE TABLE IF NOT EXISTS `wallet` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `balance` decimal(12,2) DEFAULT '0.00',
  `credit_limit` decimal(12,2) DEFAULT '0.00',
  `hold_balance` decimal(12,2) DEFAULT '0.00',
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.wallet: ~0 rows (approximately)

-- Dumping structure for table unikpayindia.wallet_transaction
CREATE TABLE IF NOT EXISTS `wallet_transaction` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `wallet_id` int DEFAULT NULL,
  `amount` decimal(12,2) NOT NULL,
  `transaction_type` varchar(20) NOT NULL,
  `reference_id` varchar(50) DEFAULT NULL,
  `reference_type` varchar(50) DEFAULT NULL,
  `notes` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  CONSTRAINT `wallet_transaction_chk_1` CHECK ((`transaction_type` in (_utf8mb4'credit',_utf8mb4'debit',_utf8mb4'hold',_utf8mb4'release'))),
  CONSTRAINT `wallet_transaction_chk_2` CHECK ((`reference_type` in (_utf8mb4'fund_transfer',_utf8mb4'transaction',_utf8mb4'commission',_utf8mb4'adjustment')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table unikpayindia.wallet_transaction: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
