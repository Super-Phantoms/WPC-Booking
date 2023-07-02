//**********************************************************************
//    Purpose: <contains the constant>
//   SN  Date       Change Description      created By
//   1   16/09/2021     Base Version        Krishan Sharma
//**********************************************************************
const apiEndPoint = 'https://graph.microsoft.com';
const apiVersion = 'v1.0';
export const constants = {
    API_URL: `${apiEndPoint}/${apiVersion}`,
    TENANT_URL: 'https://login.windows.net/',
    API_URL_IMAGE: '/',
    API: {
        BOOKING_BUSINESSES_URL: '/solutions/bookingBusinesses', 
        SERVICES: 'services',
        STAFF_MEMBERS: 'staffMembers',
        TENANT_URL_CONFIG: '.onmicrosoft.com/.well-known/openid-configuration',
        CALENDAR_VIEW: 'calendarView',
        QUESTIONS: 'customQuestions',
    },
    TITLE: {
        "o365 Booking": "o365 Booking",
    }
};

export const text_overwrite =  {
    selectService: "Reserve your time slot",
    selectTime: "",
    addYourDetails: "Add Your Details (Translated)",
    submitButtonTxt: "",
    message: "",
    yourName: "",
    creditordebitcard: "",
    messageHeading: "",
    addressHere: "",
    thankYouMessage: "",
    slotNotAvailable: "",
    phone: "",
    email: "",
    minutes: ""
  };

export const initializeData = {
    accessToken: "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImNXdGw1ZkItdTlxcm5UbTc0cGt2U2ZvaXJ5aEhZRXR4TjdCOUsyWE1pVWciLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iN2UyOGJlZC1iZDliLTQ0ZTItODIzNi1mZmIxNTlmMjYzNGMvIiwiaWF0IjoxNjg4MjczNTQyLCJuYmYiOjE2ODgyNzM1NDIsImV4cCI6MTY4ODI3NzQ0MiwiYWlvIjoiRTJaZ1lKaDVreXNyZkpFemkzYWppZmFXOEMwcUFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJib29raW5nIGxvY2FsIEFQUCIsImFwcGlkIjoiYWFiMjcyYTktZmNhYS00NzZjLWE4ZTQtOWM1MmVmMWY5MDA4IiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjdlMjhiZWQtYmQ5Yi00NGUyLTgyMzYtZmZiMTU5ZjI2MzRjLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiMDdlNzUwYTQtZTAwMi00NmEwLWJlZTgtMjYwMmNiOGVmYzFhIiwicmgiOiIwLkFWc0E3WXZpdDV1OTRrU0NOdi14V2ZKalRBTUFBQUFBQUFBQXdBQUFBQUFBQUFCYkFBQS4iLCJyb2xlcyI6WyJCb29raW5nc0FwcG9pbnRtZW50LlJlYWRXcml0ZS5BbGwiLCJDYWxlbmRhcnMuUmVhZCIsIkJvb2tpbmdzLlJlYWQuQWxsIiwiQ2FsZW5kYXJzLlJlYWRCYXNpYy5BbGwiLCJDYWxlbmRhcnMuUmVhZFdyaXRlIl0sInN1YiI6IjA3ZTc1MGE0LWUwMDItNDZhMC1iZWU4LTI2MDJjYjhlZmMxYSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6ImI3ZTI4YmVkLWJkOWItNDRlMi04MjM2LWZmYjE1OWYyNjM0YyIsInV0aSI6IlR0RDVKU3JldVVTZGh6dHREVDh0QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjA5OTdhMWQwLTBkMWQtNGFjYi1iNDA4LWQ1Y2E3MzEyMWU5MCJdLCJ4bXNfdGNkdCI6MTMwOTQ1NTE4MH0.HOmIk3seUgEY6MR_WBNNtGcbb4_1WRgz5cWYAnNVhGGUghp8RN7_kOYELHk-x-jBj0tgQfvK85B4hEvcurdPG9oHWhwXxixlRQPY-95kTgwEoiWU8bqWj2nnjxeBpNgo6qqNkbXuJJjucwozLk_NCbm5HJsCTbR4weWr1DcPW8pbG96inC2cl2SQ_1tWOJXMHDkllPkivYXI116RDFP6TWVJ922-C_66nKEMWPA38a-vHz9FQVukKYeRHXsu9KrBOnCu8xX0OMQD0bkpjRvJU2EvfWYQG0GnwXRD4R-UjXnxiZpfeRW7Vru6wWhUd2r2uG6gEUlq4lu3PkIt2VFAag",
    userbinding: "no",
    template: "temp_ks_long_form_tpl.php",
    businessid: "TestBusiness@dwsnow.com",
    show_service_image: "yes",
    timeformat: "12",
    time_diff: "-240",
    timezone: "America/New_York",
    showtimezone: "no",
    cal_locale: "en",
    firstday: "",
    text_overwrite: text_overwrite,
    default_service: "", //c635047e-6d09-4d5b-98db-377c032e8dba,2e891f79-99ce-4247-852f-81fcd4f5ee91
    default_staff: "",
    is_redirect: "no",
    redirect_url: "https://wpintegrate.net/microsoft-booking-thank-you-page/",
    belowcontactdetail: "",
    booking_default_selected_service: "",
}