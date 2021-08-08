
async function flex(db) {
db.query(`CREATE TABLE IF NOT EXISTS blogs (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title LONGTEXT NOT NULL,
    content LONGTEXT NOT NULL,
    description LONGTEXT NOT NULL,
    categories LONGTEXT NOT NULL,
    slug LONGTEXT NOT NULL,
    image LONGTEXT NOT NULL,
    status LONGTEXT NOT NULL,
    position INT(11) NOT NULL,
    create_date VARCHAR(90) NOT NULL,
    modified_date VARCHAR(90) NOT NULL,
    language VARCHAR(255) NOT NULL
) CHARACTER SET utf8`);
}

module.exports = flex;