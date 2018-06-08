webpackJsonp([70],{1190:function(t,e){t.exports={content:["section",["p","A ",["code","Tabs"]," is used to allow users to switch between different views."],["h3","Rule"],["ul",["li",["p","Generally a ",["code","Tabs"]," should have 2-4 tab pane, the title of each tab pane should be concise\uff0cnormally has 2-4 words.."]],["li",["p","In the secondary page of iOS, it is not recommended to use left and right swipe to switch tab, which conflicts with back swipe gestrue in iOS. eg:  tabs in details page."]]]],meta:{category:"Components",type:"Navigation",title:"Tabs",filename:"components/tabs/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Tabs"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Required"]]],["tbody",["tr",["td","prefixCls"],["td","prefix class"],["td","string"],["td","rmc-tabs"],["td","false"]],["tr",["td","tabs"],["td","tabs data"],["td","Models.TabData[]"],["td"],["td","true"]],["tr",["td","tabBarPosition"],["td","TabBar's position"],["td","'top' ","|"," 'bottom' ","|"," 'left' ","|"," 'right'"],["td","top"],["td","false"]],["tr",["td","renderTabBar"],["td","replace the TabBar"],["td","((props: TabBarPropsType) => React.ReactNode) ","|"," false"],["td"],["td","false"]],["tr",["td","initialPage"],["td","the tab when inital, index or key"],["td","number ","|"," string"],["td"],["td","false"]],["tr",["td","page"],["td","current tab, index or key"],["td","number ","|"," string"],["td"],["td","false"]],["tr",["td","swipeable"],["td","Whether to switch tabs with swipe gestrue in the content"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","useOnPan"],["td","use hand scroll"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","prerenderingSiblingsNumber"],["td","pre-render nearby # sibling, Infinity: render all the siblings, 0: render current page."],["td","number"],["td","1"],["td","false"]],["tr",["td","animated"],["td","Whether to change tabs with animation"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","onChange"],["td","Callback when tab is switched"],["td","(tab: Models.TabData, index: number) => void"],["td"],["td","false"]],["tr",["td","onTabClick"],["td","on tab click"],["td","(tab: Models.TabData, index: number) => void"],["td"],["td","false"]],["tr",["td","destroyInactiveTab"],["td","destroy inactive tab"],["td","boolean"],["td","false"],["td","false"]],["tr",["td","distanceToChangeTab"],["td","distance to change tab, width ratio"],["td","number"],["td","0.3"],["td","false"]],["tr",["td","usePaged"],["td","use paged"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","tabDirection"],["td","tab paging direction"],["td","'horizontal' ","|"," 'vertical'"],["td","horizontal"],["td","false"]],["tr",["td","tabBarUnderlineStyle"],["td","style of the default tab bar's underline"],["td","React.CSSProperties ","|"," any"],["td"],["td","false"]],["tr",["td","tabBarBackgroundColor"],["td","color of the default tab bar's background"],["td","string"],["td"],["td","false"]],["tr",["td","tabBarActiveTextColor"],["td","color of the default tab bar's text when active"],["td","string"],["td"],["td","false"]],["tr",["td","tabBarInactiveTextColor"],["td","color of the default tab bar's text when inactive"],["td","string"],["td"],["td","false"]],["tr",["td","tabBarTextStyle"],["td","tional styles to the tab bar's text"],["td","React.CSSProperties ","|"," any"],["td"],["td","false"]],["tr",["td","renderTab"],["td","render for replace the tab of tabbar"],["td","(tab: Models.TabData) => React.ReactNode"],["td"],["td","false"]]]],["h3","Tabs.DefaultTabBar"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Required"]]],["tbody",["tr",["td","goToTab"],["td","call this function to switch Tab"],["td","(index: number) => boolean"],["td"],["td","true"]],["tr",["td","tabs"],["td","tabs data"],["td","Models.TabData[]"],["td"],["td","true"]],["tr",["td","activeTab"],["td","current tab"],["td","number"],["td"],["td","true"]],["tr",["td","animated"],["td","Whether to change tabs with animation"],["td","boolean"],["td"],["td","true"]],["tr",["td","prefixCls"],["td","prefix class"],["td","string"],["td","am-tabs-default-bar"],["td","false"]],["tr",["td","renderTab"],["td","render for replace the tab of tabbar"],["td","(tab: Models.TabData) => React.ReactNode"],["td"],["td","false"]],["tr",["td","page"],["td","the size for the tab of tabbar"],["td","number"],["td","5"],["td","false"]],["tr",["td","onTabClick"],["td","on tab click"],["td","(tab: Models.TabData, index: number) => void"],["td"],["td","false"]]]]]}}});