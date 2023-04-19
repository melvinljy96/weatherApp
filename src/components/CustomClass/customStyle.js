import classNames from 'classnames';

export const backgroundClass = (isDarkMode) => classNames({
    'bg-dark': !isDarkMode,
    'bg-light': isDarkMode,
});

export const toggleClass = (isDarkMode) => classNames({
    'bg-blue-950 text-blue-100': !isDarkMode,
    'bg-blue-100 text-blue-950': isDarkMode,
});

export const textFieldClass = (isDarkMode) => classNames({
    'shadow-firstlight-mode/50 text-white': !isDarkMode,
    'shadow-not-dark-purple/50 text-black': isDarkMode,
});

export const buttonbgClass = (isDarkMode) => classNames({
    'bg-darker-purple': !isDarkMode,
    'bg-normal-purple': isDarkMode,
});

export const tempLabelClass = (isDarkMode) => classNames({
    'text-white': !isDarkMode,
    'text-normal-purple': isDarkMode,
});

export const allTextClass = (isDarkMode) => classNames({
    'text-white': !isDarkMode,
    'text-black': isDarkMode,
});

export const detailClass = (isDarkMode) => classNames({
    'text-white': !isDarkMode,
    'text-gray-500': isDarkMode,
});

export const topSearchClass = (isDarkMode) => classNames({
    'bg-not-dark-purple/90': !isDarkMode,
    'bg-firstlight-mode/90': isDarkMode,
});

export const midSearchClass = (isDarkMode) => classNames({
    'bg-dark-purple/90': !isDarkMode,
    'bg-secondlight-mode/90': isDarkMode,
});

export const bottomSearchClass = (isDarkMode) => classNames({
    'bg-darker-purple/90': !isDarkMode,
    'bg-thirdlight-mode/90': isDarkMode,
});

export const iconButtonClass = (isDarkMode) => classNames({
    'bg-transparent': !isDarkMode,
    'bg-white': isDarkMode,
});

export const imageShadowClass = (isDarkMode) => classNames({
    'shadow-firstlight-mode/50': !isDarkMode,
    'shadow-not-dark-purple/50': isDarkMode,
});