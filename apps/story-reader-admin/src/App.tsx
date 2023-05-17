import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { WebListList } from "./webList/WebListList";
import { WebListCreate } from "./webList/WebListCreate";
import { WebListEdit } from "./webList/WebListEdit";
import { WebListShow } from "./webList/WebListShow";
import { StoryList } from "./story/StoryList";
import { StoryCreate } from "./story/StoryCreate";
import { StoryEdit } from "./story/StoryEdit";
import { StoryShow } from "./story/StoryShow";
import { StoryWebList } from "./storyWeb/StoryWebList";
import { StoryWebCreate } from "./storyWeb/StoryWebCreate";
import { StoryWebEdit } from "./storyWeb/StoryWebEdit";
import { StoryWebShow } from "./storyWeb/StoryWebShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"StoryReader"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="WebList"
          list={WebListList}
          edit={WebListEdit}
          create={WebListCreate}
          show={WebListShow}
        />
        <Resource
          name="Story"
          list={StoryList}
          edit={StoryEdit}
          create={StoryCreate}
          show={StoryShow}
        />
        <Resource
          name="StoryWeb"
          list={StoryWebList}
          edit={StoryWebEdit}
          create={StoryWebCreate}
          show={StoryWebShow}
        />
      </Admin>
    </div>
  );
};

export default App;
