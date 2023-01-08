import React from 'react';
import "./TodoAction.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import TabPanel from '@mui/lab/TabPanel';

import ListIcon from '@mui/icons-material/List';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import CheckIcon from '@mui/icons-material/Check';

const TodoAction = ({tab, handleChangeTab}) => {
	return (
		<div className="actions-wrapper">
			<Tabs value={tab} onChange={(e, val) => handleChangeTab(val)}>
				<Tab label={<ListIcon />} index={0} value={0} />
				<Tab label={<Brightness1OutlinedIcon />} index={1} value={1} />
				<Tab label={<CheckIcon />} index={2} value={2} />
			</Tabs>
		</div>
	);
};

export default TodoAction;