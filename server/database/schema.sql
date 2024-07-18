CREATE TABLE `user` (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(150) NOT NULL,
    lastname VARCHAR(150) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE `travelJournal` (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255),
    cover_image VARCHAR(255),
    theme VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    qr_code VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES `user`(id)
);

CREATE TABLE `travelJournalEntry` (
    id INT NOT NULL AUTO_INCREMENT,
    journal_id INT,
    image VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (journal_id) REFERENCES `travelJournal`(id)
);

