module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		name: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true
			}
		},
		number: {
			type: DataTypes.INTEGER,
			validate: {
				notEmpty: true
			}
		},
		library: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true
			}
		},
		birthday: {
			type: DataTypes.DATE,
			validate: {
				notEmpty: true
			}
		}
	});

	return User;
};
