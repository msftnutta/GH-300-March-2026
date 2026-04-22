(function () {
  var TRANSLATIONS = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.weather': '🌤 Weather',

      'home.title': 'Hello World! 🌍',
      'home.subtitle': 'Live Info Dashboard',
      'home.malaysia_label': '🇲🇾 Malaysia (Default)',
      'home.date_time': 'Date & Time',
      'home.location': 'Location',
      'home.timezone': 'Timezone',
      'home.local_info': '📍 Your Local Info',
      'home.local_datetime': 'Local Date & Time',
      'home.your_location': 'Your Location',
      'home.your_timezone': 'Your Timezone',
      'home.weather_link': '🌤 View Weather Forecast →',

      'about.title': 'About This App',
      'about.subtitle': 'What does it do?',
      'about.features_heading': '✨ Features',
      'about.stack_heading': '🛠 Tech Stack',
      'about.back': '← Back to Home',

      'weather.title': '🌤 Weather Forecast',
      'weather.malaysia_loc': '🇲🇾 Malaysia — Default Location',
      'weather.location_label': 'Location',
      'weather.malaysia_time_label': 'Malaysia Time (MYT)',
      'weather.loading_my': 'Fetching Malaysia weather...',
      'weather.conditions': 'Current Conditions',
      'weather.forecast_5day': '5-Day Forecast',
      'weather.humidity': 'Humidity',
      'weather.wind': 'Wind',
      'weather.uv': 'UV Index',
      'weather.visibility': 'Visibility',
      'weather.pressure': 'Pressure',
      'weather.cloud': 'Cloud Cover',
      'weather.feels_like': 'Feels like',
      'weather.local_title': '📍 Your Local Weather',
      'weather.detecting': 'Detecting your location...',
      'weather.your_timezone': 'Your Timezone',
      'weather.local_time': 'Local Time',
      'weather.loading_loc': 'Fetching local weather...',
      'weather.retry': 'Retry',
      'weather.today': 'Today',
      'weather.tomorrow': 'Tomorrow'
    },

    zh: {
      'nav.home': '首页',
      'nav.about': '关于',
      'nav.weather': '🌤 天气',

      'home.title': '你好，世界！🌍',
      'home.subtitle': '实时信息面板',
      'home.malaysia_label': '🇲🇾 马来西亚（默认）',
      'home.date_time': '日期和时间',
      'home.location': '位置',
      'home.timezone': '时区',
      'home.local_info': '📍 您的本地信息',
      'home.local_datetime': '本地日期和时间',
      'home.your_location': '您的位置',
      'home.your_timezone': '您的时区',
      'home.weather_link': '🌤 查看天气预报 →',

      'about.title': '关于本应用',
      'about.subtitle': '它有什么功能？',
      'about.features_heading': '✨ 功能特色',
      'about.stack_heading': '🛠 技术栈',
      'about.back': '← 返回首页',

      'weather.title': '🌤 天气预报',
      'weather.malaysia_loc': '🇲🇾 马来西亚 — 默认位置',
      'weather.location_label': '位置',
      'weather.malaysia_time_label': '马来西亚时间 (MYT)',
      'weather.loading_my': '正在获取马来西亚天气...',
      'weather.conditions': '当前状况',
      'weather.forecast_5day': '5天预报',
      'weather.humidity': '湿度',
      'weather.wind': '风速',
      'weather.uv': '紫外线指数',
      'weather.visibility': '能见度',
      'weather.pressure': '气压',
      'weather.cloud': '云量',
      'weather.feels_like': '体感温度',
      'weather.local_title': '📍 您的本地天气',
      'weather.detecting': '正在检测您的位置...',
      'weather.your_timezone': '您的时区',
      'weather.local_time': '本地时间',
      'weather.loading_loc': '正在获取本地天气...',
      'weather.retry': '重试',
      'weather.today': '今天',
      'weather.tomorrow': '明天'
    },

    ja: {
      'nav.home': 'ホーム',
      'nav.about': 'について',
      'nav.weather': '🌤 天気',

      'home.title': 'ハロー・ワールド！🌍',
      'home.subtitle': 'リアルタイム情報',
      'home.malaysia_label': '🇲🇾 マレーシア（デフォルト）',
      'home.date_time': '日付と時刻',
      'home.location': '場所',
      'home.timezone': 'タイムゾーン',
      'home.local_info': '📍 あなたのローカル情報',
      'home.local_datetime': 'ローカル日付と時刻',
      'home.your_location': 'あなたの場所',
      'home.your_timezone': 'あなたのタイムゾーン',
      'home.weather_link': '🌤 天気予報を見る →',

      'about.title': 'このアプリについて',
      'about.subtitle': '何ができますか？',
      'about.features_heading': '✨ 機能',
      'about.stack_heading': '🛠 技術スタック',
      'about.back': '← ホームに戻る',

      'weather.title': '🌤 天気予報',
      'weather.malaysia_loc': '🇲🇾 マレーシア — デフォルト',
      'weather.location_label': '場所',
      'weather.malaysia_time_label': 'マレーシア時間 (MYT)',
      'weather.loading_my': 'マレーシアの天気を取得中...',
      'weather.conditions': '現在の状況',
      'weather.forecast_5day': '5日間予報',
      'weather.humidity': '湿度',
      'weather.wind': '風速',
      'weather.uv': '紫外線指数',
      'weather.visibility': '視程',
      'weather.pressure': '気圧',
      'weather.cloud': '雲量',
      'weather.feels_like': '体感温度',
      'weather.local_title': '📍 あなたの地元の天気',
      'weather.detecting': '位置を検出中...',
      'weather.your_timezone': 'あなたのタイムゾーン',
      'weather.local_time': 'ローカル時間',
      'weather.loading_loc': 'ローカルの天気を取得中...',
      'weather.retry': '再試行',
      'weather.today': '今日',
      'weather.tomorrow': '明日'
    },

    hi: {
      'nav.home': 'होम',
      'nav.about': 'के बारे में',
      'nav.weather': '🌤 मौसम',

      'home.title': 'नमस्ते दुनिया! 🌍',
      'home.subtitle': 'लाइव जानकारी डैशबोर्ड',
      'home.malaysia_label': '🇲🇾 मलेशिया (डिफ़ॉल्ट)',
      'home.date_time': 'दिनांक और समय',
      'home.location': 'स्थान',
      'home.timezone': 'समय क्षेत्र',
      'home.local_info': '📍 आपकी स्थानीय जानकारी',
      'home.local_datetime': 'स्थानीय दिनांक और समय',
      'home.your_location': 'आपका स्थान',
      'home.your_timezone': 'आपका समय क्षेत्र',
      'home.weather_link': '🌤 मौसम पूर्वानुमान देखें →',

      'about.title': 'इस ऐप के बारे में',
      'about.subtitle': 'यह क्या करता है?',
      'about.features_heading': '✨ विशेषताएँ',
      'about.stack_heading': '🛠 तकनीकी स्टैक',
      'about.back': '← होम पर वापस',

      'weather.title': '🌤 मौसम पूर्वानुमान',
      'weather.malaysia_loc': '🇲🇾 मलेशिया — डिफ़ॉल्ट स्थान',
      'weather.location_label': 'स्थान',
      'weather.malaysia_time_label': 'मलेशिया समय (MYT)',
      'weather.loading_my': 'मलेशिया का मौसम प्राप्त हो रहा है...',
      'weather.conditions': 'वर्तमान स्थिति',
      'weather.forecast_5day': '5-दिन का पूर्वानुमान',
      'weather.humidity': 'आर्द्रता',
      'weather.wind': 'हवा',
      'weather.uv': 'यूवी सूचकांक',
      'weather.visibility': 'दृश्यता',
      'weather.pressure': 'दबाव',
      'weather.cloud': 'बादल',
      'weather.feels_like': 'महसूस होता है',
      'weather.local_title': '📍 आपका स्थानीय मौसम',
      'weather.detecting': 'आपका स्थान पहचान रहा है...',
      'weather.your_timezone': 'आपका समय क्षेत्र',
      'weather.local_time': 'स्थानीय समय',
      'weather.loading_loc': 'स्थानीय मौसम प्राप्त हो रहा है...',
      'weather.retry': 'पुनः प्रयास',
      'weather.today': 'आज',
      'weather.tomorrow': 'कल'
    }
  };

  var LOCALE_MAP = { en: 'en-US', zh: 'zh-CN', ja: 'ja-JP', hi: 'hi-IN' };
  var SUPPORTED_LANGS = ['en', 'zh', 'ja', 'hi'];

  function getCurrentLanguage() {
    var stored = localStorage.getItem('helloworld-lang');
    return (stored && SUPPORTED_LANGS.indexOf(stored) !== -1) ? stored : 'en';
  }

  function getTranslation(key) {
    var lang = getCurrentLanguage();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ||
           (TRANSLATIONS.en[key]) ||
           key;
  }

  function getLocale() {
    return LOCALE_MAP[getCurrentLanguage()] || 'en-US';
  }

  function applyTranslations() {
    var lang = getCurrentLanguage();
    document.documentElement.lang = LOCALE_MAP[lang] || lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = getTranslation(key);
      if (text) el.textContent = text;
    });

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('bg-white/30', isActive);
      btn.classList.toggle('font-bold', isActive);
      btn.classList.toggle('bg-white/10', !isActive);
    });
  }

  function setLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) return;
    localStorage.setItem('helloworld-lang', lang);
    applyTranslations();
    if (typeof updateDateTime === 'function') updateDateTime();
    if (typeof updateLocalDateTime === 'function') updateLocalDateTime();
    if (typeof updateMalaysiaTime === 'function') updateMalaysiaTime();
    if (typeof updateLocalTime === 'function') updateLocalTime();
  }

  window.i18n = {
    getTranslation: getTranslation,
    getCurrentLanguage: getCurrentLanguage,
    getLocale: getLocale,
    applyTranslations: applyTranslations,
    setLanguage: setLanguage
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
