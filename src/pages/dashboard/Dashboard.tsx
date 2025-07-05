import { ToolsBarrs } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Dashboard = () => {

  return(
    <LayoutBase
      title='Página Inicial'
      toolsBarrs={(
        <ToolsBarrs
          showSearchInput
        />
      )}>
      Testando
    </LayoutBase>
  );

};
