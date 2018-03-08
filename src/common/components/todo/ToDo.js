import React from 'react'
import { Card, Divider, Tabs, Icon } from 'antd'
// import MobileTearSheet from '../../../MobileTearSheet';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import {List, ListItem} from 'material-ui/List';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentSend from 'material-ui/svg-icons/content/send';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import Divider from 'material-ui/Divider';
// import ActionInfo from 'material-ui/svg-icons/action/info';
import './ToDo.less'
import TodoItmes from './ToDoItems'
import AllItems from './AllItems'
const TabPane = Tabs.TabPane;

export default class ToDo extends React.Component{
    render() {
        return (
            <div className="todowrapper">
                <Card>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab={<span>全部</span>} key="1">
                      <AllItems/>
                    </TabPane>
                    <TabPane tab={<span>待办</span>} key="2">
                      Tab 2
                    </TabPane>
                    <TabPane tab={<span>已完成</span>} key="3">
                      Tab 3
                    </TabPane>
                  </Tabs>
                </Card>
            </div>
        )
    }
}
// const ToDo = () => (
//   <MuiThemeProvider>
//     <MobileTearSheet>
//       <List>
//         <ListItem primaryText="全部任务" leftIcon={<ContentInbox />} />
//         <ListItem primaryText="待办任务" leftIcon={<ActionGrade />} />
//         <ListItem primaryText="已完成任务" leftIcon={<ContentSend />} />
//         {/* <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
//         <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} /> */}
//       </List>
//       {/* <Divider />
//       <List>
//         <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
//         <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
//         <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
//         <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
//       </List> */}
//     </MobileTearSheet>
//     </MuiThemeProvider>
//   );
  
  // export default ToDo;