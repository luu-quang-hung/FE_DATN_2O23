import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
    height: 'calc(100vh - 210px)',
    border: '1px solid',
    borderColor: theme.palette.primary.light
}));

// ============================|| MATERIAL ICONS ||============================ //

const CategoriesLv2 = () => (
    <MainCard title="Categories Lv2">
       
    </MainCard>
);

export default CategoriesLv2;
