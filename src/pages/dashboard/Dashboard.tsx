import { DetailTools } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Dashboard = () => {

  return(
    <LayoutBase
      title='Página Inicial'
      toolsBarrs={(
        <DetailTools/>
      )}>
      Testando
    </LayoutBase>
  );

};
