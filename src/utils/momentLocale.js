import moment from 'moment';
import 'moment/dist/locale/ru';

const momentLocale = () => {
	moment.locale('ru')
	return moment();
}

export default momentLocale;