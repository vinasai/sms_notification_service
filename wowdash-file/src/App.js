import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageOne from "./pages/HomePageOne";
import EmailPage from "./pages/EmailPage";
import AddUserPage from "./pages/AddUserPage";
import AlertPage from "./pages/AlertPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ErrorPage from "./pages/ErrorPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import FormLayoutPage from "./pages/FormLayoutPage";
import FormValidationPage from "./pages/FormValidationPage";
import FormPage from "./pages/FormPage";
import NotificationAlertPage from "./pages/NotificationAlertPage";
import NotificationPage from "./pages/NotificationPage";
import PaginationPage from "./pages/PaginationPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TableBasicPage from "./pages/TableBasicPage";
import TableDataPage from "./pages/TableDataPage";
import ViewDetailsPage from "./pages/ViewDetailsPage";
import ViewProfilePage from "./pages/ViewProfilePage";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import Group from "./components/groups/group";
import AddGroup from "./components/groups/addGroup";
import AddStudent from "./components/groups/addStudent";
import UploadFiles from "./components/groups/uploadFiles";
import Files from "./components/files/files";
import ViewBulkDetailsPage from "./pages/ViewBulkDetailsPage";
import Login from "./components/login/login";
import UsersGridPage from "./pages/UsersGridPage";
import UsersListPage from "./pages/UsersListPage";



function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<HomePageOne />} />
        {/* SL */}
        <Route exact path="/add-user" element={<AddUserPage />} />
        <Route exact path="/add-group" element={<AddGroup />} />
        <Route exact path="/add-student" element={<AddStudent />} />
        <Route exact path="/upload-files" element={<UploadFiles />} />
        <Route exact path="/files" element={<Files />} />
        <Route exact path="/alert" element={<AlertPage />} />
        <Route exact path="/button" element={<ButtonPage />} />
        <Route exact path="/dropdown" element={<DropdownPage />} />
        <Route exact path="/email" element={<EmailPage />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/form-layout" element={<FormLayoutPage />} />
        <Route exact path="/form-validation" element={<FormValidationPage />} />
        <Route exact path="/form" element={<FormPage />} />
        <Route exact path="/notification-alert" element={<NotificationAlertPage />} />
        <Route exact path="/notification" element={<NotificationPage />} />
        <Route exact path="/pagination" element={<PaginationPage />} />
        <Route exact path="/sign-in" element={<SignInPage />} />
        <Route exact path="/sign-up" element={<SignUpPage />} />
        <Route exact path="/table-basic" element={<TableBasicPage />} />
        <Route exact path="/table-data" element={<TableDataPage />} />
        <Route exact path="/users-grid" element={<UsersGridPage />} />
        <Route exact path="/users-list" element={<UsersListPage />} />
        <Route exact path="/group-list" element={<Group />} />
        <Route exact path="/view-details" element={<ViewDetailsPage />} />
        <Route exact path="/view-details/:id" element={<ViewDetailsPage />} />
        <Route exact path="/bulk-view-details" element={<ViewBulkDetailsPage />} />
        <Route exact path="/view-profile" element={<ViewProfilePage />} />
        <Route exact path="*" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;



