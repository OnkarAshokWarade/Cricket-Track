const pad2 = (value) => String(value).padStart(2, '0');
const DATE_KEY_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const APP_TIME_ZONE = 'Asia/Kolkata';
const TIME_ZONE_DATE_FORMATTER = new Intl.DateTimeFormat('en-CA', {
  timeZone: APP_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const parseDateValue = (dateValue = new Date()) => {
  if (typeof dateValue === 'string' && DATE_KEY_REGEX.test(dateValue)) {
    const [year, month, day] = dateValue.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  return new Date(dateValue);
};

const getTimeZoneDateParts = (dateValue) => {
  const parts = TIME_ZONE_DATE_FORMATTER.formatToParts(dateValue);
  const year = Number(parts.find((part) => part.type === 'year')?.value);
  const month = Number(parts.find((part) => part.type === 'month')?.value);
  const day = Number(parts.find((part) => part.type === 'day')?.value);

  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) {
    return null;
  }

  return { year, month, day };
};

const addDaysToDateKey = (dateKey, daysToAdd) => {
  if (!DATE_KEY_REGEX.test(dateKey)) return '';
  const [year, month, day] = dateKey.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + daysToAdd);
  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}-${pad2(date.getUTCDate())}`;
};

export const toDateKey = (dateValue = new Date()) => {
  if (typeof dateValue === 'string' && DATE_KEY_REGEX.test(dateValue)) {
    return dateValue;
  }

  const date = parseDateValue(dateValue);
  if (Number.isNaN(date.getTime())) return '';

  const parts = getTimeZoneDateParts(date);
  if (!parts) return '';
  return `${parts.year}-${pad2(parts.month)}-${pad2(parts.day)}`;
};

export const formatDate = (dateValue) => {
  const key = toDateKey(dateValue);
  if (!DATE_KEY_REGEX.test(key)) return '';
  const [year, month, day] = key.split('-');
  return `${day}/${month}/${year}`;
};

export const todayKey = () => toDateKey(new Date());

export const tomorrowKey = () => addDaysToDateKey(todayKey(), 1);

export const yesterdayKey = () => addDaysToDateKey(todayKey(), -1);

export const getWeekNumber = (dateValue = new Date()) => {
  const key = toDateKey(dateValue);
  if (!DATE_KEY_REGEX.test(key)) return 0;

  const [year, month, day] = key.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const yearStart = new Date(Date.UTC(year, 0, 1));
  const firstSunday = new Date(yearStart);
  firstSunday.setUTCDate(yearStart.getUTCDate() - yearStart.getUTCDay());

  return Math.floor((date - firstSunday) / 604800000) + 1;
};

export const getWeekId = (dateValue = new Date()) => {
  const key = toDateKey(dateValue);
  if (!DATE_KEY_REGEX.test(key)) return '';
  const [year] = key.split('-').map(Number);
  return `${year}-W${String(getWeekNumber(key)).padStart(2, '0')}`;
};

export const isSameDay = (first, second) => {
  const firstKey = toDateKey(first);
  const secondKey = toDateKey(second);
  return Boolean(firstKey && secondKey && firstKey === secondKey);
};

export const isDateAllowedForCaptain = (dateValue) => {
  const key = toDateKey(dateValue);
  if (!key) return false;
  return key === todayKey() || key === tomorrowKey();
};
