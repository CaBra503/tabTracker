import Api from '@/services/Api';

export default {
	index () {
		return Api().get('songs');
	}
};

// in ruby it will be
// /songs
// /songs/:id