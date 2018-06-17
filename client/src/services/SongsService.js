import Api from '@/services/Api';

export default {
	index () {
		return Api().get('songs');
	},
	show (songId) {
		return Api().get(`songs/${songId}`);
	},
	post (song) {
		// console.log('posted');
		return Api().post('songs', song);
	}
};
