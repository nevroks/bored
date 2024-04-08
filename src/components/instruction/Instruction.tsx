import classes from "./style.module.css";
import {FaLongArrowAltLeft, FaLongArrowAltRight, FaLongArrowAltUp} from "react-icons/fa";
import {RxArrowTopLeft, RxArrowTopRight} from "react-icons/rx";
const Instruction = () => {
    return (
        <div className={classes.instruction}>
            <div className={classes.instruction__info}>
                <div className={classes.instruction__info__logo}>
                    <FaLongArrowAltUp/>
                    <p>Это лого</p>
                </div>
                <div className={classes.instruction__info__filter}>
                    <FaLongArrowAltUp/>
                    <p>Здесь находится секция для фитрации туду,кнопка ФИЛЬТР вызывает попап внутри которого находятся параметры дял фильтра задачи,
                        после применения этих параметров справа от кнопки ЗАПРОСИТЬ ТУДУ появится надпись "модиф" и тогда при запросе будут учитыватся те параметры
                        которые ты выбрал,чтобы их отменить надо внутри фильтра нажать кнопку СБРОСИТЬ ВСЁ
                    </p>
                </div>
                <div className={classes.instruction__info__search_page}>
                    <RxArrowTopRight />
                    <p>Это та страница где ты находишся сейчас,тут можно искать задачи,фильтровать их и добавлять в избранное </p>
                </div>
                <div className={classes.instruction__info__profile_page}>
                    <RxArrowTopLeft />
                    <p>Это страница профиля,там есть настройки для твоего имени и пароля,так же там отображаются задачи которые ты добавил с избранное</p>
                </div>
                <div className={classes.instruction__info__todo}>
                    <FaLongArrowAltRight />
                    <p>Это собственно сама задача в которой есть 5 полей:1 поле-поле что делать,ут описана сама задача. <br/>
                        2 поле-поле доступности где описано насколько легко это делао выполнить от легкого(Максимальная) до сложного(Минимальная) <br/>
                        3 поле-поле типа,здесь описан тип дела или же к какой сфере деятельности он относится <br/>
                        4 поле-поле в котором описана цена данного дела от самого дешёвого(Бесплатно) до самого дорогого(Дорого) <br/>
                        5 поле-поле в котором описано сколько людей будут вовлечены в данную задачу
                    </p>
                </div>
                <div className={classes.instruction__info__favorite}>
                    <FaLongArrowAltLeft />
                    <p>Это кнопка для добавления/удаления из избранных</p>
                </div>
            </div>
        </div>
    );
};

export default Instruction;