import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import es from "dayjs/locale/es"
import capitalize from "../capitalize";

dayjs.locale("es-us");
dayjs.extend(relativeTime);

export function humanizarFecha(dateStr) {
    if(!dateStr || typeof dateStr !== "string") {
        return "No ha pasado una fecha";
    }

    const dateInDayjs = dayjs(dateStr);
    const dateInMsFromNow = Math.abs(dateInDayjs.diff(dayjs()));

    const MONTH_IN_MS = 1000 * 60 * 60 * 24 * 30.4167;

    if(dateInDayjs.get("year") !== dayjs().get("year")) {
        return dateInDayjs.format("[Se agrego el] D [de] MMMM [de] YYYY");
    }
    if(dateInMsFromNow >= MONTH_IN_MS) {
        return dateInDayjs.format("[Se agrego el] D [de] MMMM");
    }

    return `Se agrego ${dateInDayjs.fromNow()}`;
}

export function getNowDate() {
    return dayjs();
}
