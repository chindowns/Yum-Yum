module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("Tag", {
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    return Tag;
};