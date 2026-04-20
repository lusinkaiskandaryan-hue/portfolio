import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { BACK_HOME_TEXT, PAGE_SUBTITLE, PAGE_TITLE, STATUS_CODE } from './consts';
import { resultClassName } from './styles';
import { getBackHomePath } from './utils';

export const NotFoundPage = () => {
  return (
    <Result
      status={STATUS_CODE}
      title={PAGE_TITLE}
      subTitle={PAGE_SUBTITLE}
      className={resultClassName}
      extra={
        <Button type="primary">
          <Link to={getBackHomePath()}>{BACK_HOME_TEXT}</Link>
        </Button>
      }
    />
  );
};
