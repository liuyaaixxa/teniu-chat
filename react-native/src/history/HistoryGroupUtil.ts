import { Chat } from '../types/Chat.ts';
import i18next from 'i18next';

export function groupMessagesByDate(messages: Chat[]) {
  const groupChat: Chat[] = [];
  const groupTitleSet = new Set<string>();

  const todayTimestamp = getTodayTimestamp();
  const oneDayMs = 24 * 60 * 60 * 1000;
  const yesterday = todayTimestamp - oneDayMs;
  const ago2days = todayTimestamp - 2 * oneDayMs;
  const ago3days = todayTimestamp - 3 * oneDayMs;
  const ago4days = todayTimestamp - 4 * oneDayMs;
  const ago5days = todayTimestamp - 5 * oneDayMs;
  const ago6days = todayTimestamp - 6 * oneDayMs;
  const lastWeek = todayTimestamp - 13 * oneDayMs;
  const ago2week = todayTimestamp - 20 * oneDayMs;
  const ago3week = todayTimestamp - 27 * oneDayMs;
  const ago4week = todayTimestamp - 34 * oneDayMs;
  let currentMonthTimestamp = 0;
  let currentMonthTitle = '';
  messages.forEach(message => {
    let groupTitle = '';
    if (message.timestamp >= todayTimestamp) {
      groupTitle = i18next.t('history.today');
    } else if (message.timestamp >= yesterday) {
      groupTitle = i18next.t('history.yesterday');
    } else if (message.timestamp >= ago2days) {
      groupTitle = i18next.t('history.daysAgo', { count: 2 });
    } else if (message.timestamp >= ago3days) {
      groupTitle = i18next.t('history.daysAgo', { count: 3 });
    } else if (message.timestamp >= ago4days) {
      groupTitle = i18next.t('history.daysAgo', { count: 4 });
    } else if (message.timestamp >= ago5days) {
      groupTitle = i18next.t('history.daysAgo', { count: 5 });
    } else if (message.timestamp >= ago6days) {
      groupTitle = i18next.t('history.daysAgo', { count: 6 });
    } else if (message.timestamp >= lastWeek) {
      groupTitle = i18next.t('history.lastWeek');
    } else if (message.timestamp >= ago2week) {
      groupTitle = i18next.t('history.weeksAgo', { count: 2 });
    } else if (message.timestamp >= ago3week) {
      groupTitle = i18next.t('history.weeksAgo', { count: 3 });
    } else if (message.timestamp >= ago4week) {
      groupTitle = i18next.t('history.weeksAgo', { count: 4 });
    } else {
      if (
        currentMonthTimestamp !== 0 &&
        message.timestamp >= currentMonthTimestamp
      ) {
        groupTitle = currentMonthTitle;
      } else {
        groupTitle = formatTimestampToYearMonth(message.timestamp);
        currentMonthTitle = groupTitle;
        currentMonthTimestamp = getFirstDayOfMonthTimestamp(groupTitle);
      }
    }
    if (!groupTitleSet.has(groupTitle)) {
      groupChat.push({
        id: -(groupTitleSet.size + 1),
        mode: '',
        timestamp: 0,
        title: groupTitle,
      });
      groupTitleSet.add(groupTitle);
    }
    groupChat.push(message);
  });
  return groupChat;
}

function getTodayTimestamp(): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  now.setDate(now.getDate());
  return now.getTime();
}

function formatTimestampToYearMonth(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${year}.${month}`;
}

function getFirstDayOfMonthTimestamp(yearMonth: string): number {
  const [year, month] = yearMonth.split('.').map(Number);
  const date = new Date(year, month - 1, 1, 0, 0, 0, 0);
  return date.getTime();
}
