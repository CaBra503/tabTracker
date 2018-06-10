//This is the Songs model.
module.exports = (sequelize, DataTypes) => {
	const Song = sequelize.define('Song', {
		title: DataTypes.STRING,
		artist: DataTypes.STRING,
		genre: DataTypes.STRING,
		album: DataTypes.STRING,
		albumImageURL: DataTypes.STRING,
		youtubeId: DataTypes.STRING,
		lyrics: DataTypes.TEXT,
		tab: DataTypes.TEXT
	});
	
	return Song;
};