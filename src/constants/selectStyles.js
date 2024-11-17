import { BREAKPOINT, STYLES } from './index.js';

const baseStyles = {
  control: (provided, state, customStyles = {}) => ({
    ...provided,
    width: '100%',
    height: '44px',
    borderRadius: '60px',
    border: state.isFocused
      ? `1px solid ${STYLES.PRIMARY_ACCENT_COLOR}`
      : `1px solid ${STYLES.PRIMARY_GREY_COLOR}`,
    boxShadow: 'none',
    fontFamily: STYLES.PRIMARY_FONT_FAMILY,
    fontWeight: '400',
    fontSize: '12px',
    paddingLeft: '8px',
    paddingRight: '8px',
    lineHeight: '1.5',
    color: `${STYLES.PRIMARY_PLACEHOLDER_COLOR}`,
    cursor: 'pointer',
    transition: 'border-color 0.5s ease',
    '&:hover': {
      border: `1px solid ${STYLES.PRIMARY_ACCENT_COLOR}`,
    },
    ...customStyles,
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: STYLES.PRIMARY_FONT_FAMILY,
    fontWeight: '400',
    fontSize: '12px',
    color: state.isSelected ? STYLES.PRIMARY_WHITE_COLOR : 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'none',
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    color: STYLES.PRIMARY_TEXT_COLOR,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: STYLES.PRIMARY_PLACEHOLDER_COLOR,
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: STYLES.PRIMARY_ACCENT_COLOR,
    borderRadius: '15px',
    marginTop: '4px',
    width: '100%',
    padding: '13px 8px 13px 8px',
  }),
  menuList: provided => ({
    ...provided,
    padding: '0',
    maxHeight: '140px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: '12px',
    },
  }),
};

const responsiveStyles = {
  [`@media only screen and (min-width: ${BREAKPOINT.TABLET}px)`]: {
    width: '224px',
  },
};

export const categoryStyles = {
  ...baseStyles,
  control: (provided, state) =>
    baseStyles.control(provided, state, {
      [`@media only screen and (min-width: ${BREAKPOINT.MOBILE}px)`]: {
        ...responsiveStyles,
        width: '100%',
      },
      [`@media only screen and (min-width: ${BREAKPOINT.TABLET}px)`]: {
        ...responsiveStyles,
      },
    }),
};
