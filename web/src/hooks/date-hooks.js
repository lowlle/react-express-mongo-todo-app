import dayjs from "dayjs";
import dayjs_plugin_utc from "dayjs/plugin/utc";
import dayjs_plugin_relativeTime from "dayjs/plugin/relativeTime";
import dayjs_plugin_customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs_plugin_duration from "dayjs/plugin/duration";

dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_relativeTime);
dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.extend(dayjs_plugin_duration);

export const useDateHumanize = (date) => {
    const currentDateTime = dayjs()
    const givenDate = dayjs(date)

    const difference = givenDate.diff(currentDateTime)
    const duration = dayjs.duration(difference)

    return duration.humanize(true)
}

export const DateModule = dayjs;