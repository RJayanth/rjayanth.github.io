import { string } from "prop-types";
import './index.css';
import { useThemeContext } from "../../themes";

const SectionHeadingText = (props) => {
    const { isDarkTheme } = useThemeContext();
  const { customClassName = '', title = '' } = props;
  return (
    <div className={`section-heading-text ${isDarkTheme ? 'sh-dark' : 'sh-light'} ${customClassName}`}> {title} </div>
  );
};

export default SectionHeadingText;

SectionHeadingText.propTypes = {
    customClassName: string,
    title: string,
}

