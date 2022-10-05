import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export function App() {
   
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Route>
        </Routes>  
    );
};



// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/contactSlice";
// import { ContactForm } from "./ContactForm/ContactForm";
// import Filter from "./Filter/Filter";
// import ContactList from "./ContactList/ContactList";

// export function App() {

//     const { isLoadig, error } = useSelector(state => state.contacts);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);
  
//     return (
//         <div>

//         <h1>Phonebook</h1>
//          <ContactForm />

//          <h2>Contacts</h2>

//          <Filter />

//          {isLoadig === true && <h2>Loading...</h2>}
//          {error && <h2>An error occured: {error}</h2>}

//         <ContactList /> 

//         </div>
//     );
// };







