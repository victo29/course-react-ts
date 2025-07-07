import { ListingTools } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Dashboard = () => {

  return(
    <LayoutBase
      title='Página Inicial'
      toolsBarrs={(
        <ListingTools
          showSearchInput
        />
      )}>
      Testando
    </LayoutBase>
  );

};
