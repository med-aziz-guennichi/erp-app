import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Rest from '../components/Rest'
import Footer from '../components/Footer'
const Profile = () => {
  return (
<div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" className="app-default">
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
<Header/>
      {/*begin::Wrapper*/}
      <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
<Sidebar/>
        {/*begin::Main*/}
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          {/*begin::Content wrapper*/}
          <div className="d-flex flex-column flex-column-fluid">
            {/*begin::Toolbar*/}
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
              {/*begin::Toolbar container*/}
              <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                {/*begin::Page title*/}
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                  {/*begin::Title*/}
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Account Overview</h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">
                      <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">Account</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                {/*begin::Actions*/}
                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  {/*begin::Filter menu*/}
                  <div className="m-0">
                    {/*begin::Menu toggle*/}
                    <a href="#" className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                      <span className="svg-icon svg-icon-6 svg-icon-muted me-1">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}Filter</a>
                    {/*end::Menu toggle*/}
                    {/*begin::Menu 1*/}
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d0da0b659b7">
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_63d0da0b659b7" data-allow-clear="true">
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Member Type:</label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" defaultValue={1} />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Notifications:</label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                          <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Filter menu*/}
                  {/*begin::Secondary button*/}
                  {/*end::Secondary button*/}
                  {/*begin::Primary button*/}
                  <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
                  {/*end::Primary button*/}
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id="kt_app_content" className="app-content flex-column-fluid">
              {/*begin::Content container*/}
              <div id="kt_app_content_container" className="app-container container-xxl">
                {/*begin::Navbar*/}
                <div className="card mb-5 mb-xl-10">
                  <div className="card-body pt-9 pb-0">
                    {/*begin::Details*/}
                    <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                      {/*begin: Pic*/}
                      <div className="me-7 mb-4">
                        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                          <img src="assets/media/avatars/300-1.jpg" alt="image" />
                          <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px" />
                        </div>
                      </div>
                      {/*end::Pic*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        {/*begin::Title*/}
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                          {/*begin::User*/}
                          <div className="d-flex flex-column">
                            {/*begin::Name*/}
                            <div className="d-flex align-items-center mb-2">
                              <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Amani Layouni</a>
                              <a href="#">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen026.svg
                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                    <path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="currentColor" />
                                    <path d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
                                  </svg>
                                </span>*/}
                                {/*end::Svg Icon*/}
                              </a>
                            </div>
                            {/*end::Name*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                              <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                <span className="svg-icon svg-icon-4 me-1">
                                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                    <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                    <rect x={7} y={6} width={4} height={4} rx={2} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Admin</a>
                              <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                <span className="svg-icon svg-icon-4 me-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                    <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Msaken</a>
                              <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                <span className="svg-icon svg-icon-4 me-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                                    <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}admin@gmail.com</a>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Actions*/}
                          <div className="d-flex my-4">
                            <a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                              <span className="svg-icon svg-icon-3 d-none">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                  <path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                              {/*begin::Indicator label*/}
                              <span className="indicator-label">Follow</span>
                              {/*end::Indicator label*/}
                              {/*begin::Indicator progress*/}
                              <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                              {/*end::Indicator progress*/}
                            </a>
                            {/*
                            <a href="#" className="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
                            */}
                            {/*begin::Menu*/}
                            <div className="me-0">
                              <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                <i className="bi bi-three-dots fs-3" />
                              </button>
                              {/*begin::Menu 3*/}
                              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                {/*begin::Heading*/}
                                <div className="menu-item px-3">
                                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                </div>
                                {/*end::Heading*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Create Invoice</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link flex-stack px-3">Create Payment
                                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Generate Bill</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                  <a href="#" className="menu-link px-3">
                                    <span className="menu-title">Subscription</span>
                                    <span className="menu-arrow" />
                                  </a>
                                  {/*begin::Menu sub*/}
                                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">Plans</a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">Billing</a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">Statements</a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator my-2" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3">
                                        {/*begin::Switch*/}
                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                          {/*begin::Input*/}
                                          <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                                          {/*end::Input*/}
                                          {/*end::Label*/}
                                          <span className="form-check-label text-muted fs-6">Recuring</span>
                                          {/*end::Label*/}
                                        </label>
                                        {/*end::Switch*/}
                                      </div>
                                    </div>
                                    {/*end::Menu item*/}
                                  </div>
                                  {/*end::Menu sub*/}
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3 my-1">
                                  <a href="#" className="menu-link px-3">Settings</a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu 3*/}
                            </div>
                            
                            {/*end::Menu*/}
                          </div>
                          {/*end::Actions*/}
                        </div>
                        {/*end::Title*/}
                        {/*begin::Stats*/}
                        <div className="d-flex flex-wrap flex-stack">
                          {/*begin::Wrapper*/}
                          <div className="d-flex flex-column flex-grow-1 pe-8">
                            {/*begin::Stats*/}
                            <div className="d-flex flex-wrap">
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/*begin::Number*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value={4500} data-kt-countup-prefix="$">0</div>
                                </div>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold fs-6 text-gray-400">Earnings</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/*begin::Number*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                  <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                      <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value={75}>0</div>
                                </div>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold fs-6 text-gray-400">Projects</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/*begin::Number*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value={60} data-kt-countup-prefix="%">0</div>
                                </div>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold fs-6 text-gray-400">Success Rate</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Wrapper*/}
                          {/*begin::Progress*/}
                         
                          {/*end::Progress*/}
                        </div>
                        {/*end::Stats*/}
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Navs*/}
                    <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                      {/*begin::Nav item*/}
                      <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo1/dist/account/overview.html">Overview</a>
                      </li>
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/account/settings.html">Settings</a>
                      </li>
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/account/activity.html">Activity</a>
                      </li>
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                     
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                     
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                  
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                    
                      {/*end::Nav item*/}
                      {/*begin::Nav item*/}
                      <li className="nav-item mt-2">
                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/account/Documents.html">Documents</a>
                      </li>
                      {/*end::Nav item*/}
                    </ul>
                    {/*begin::Navs*/}
                  </div>
                </div>
                {/*end::Navbar*/}
                {/*begin::details View*/}
                <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
                  {/*begin::Card header*/}
                  <div className="card-header cursor-pointer">
                    {/*begin::Card title*/}
                    <div className="card-title m-0">
                      <h3 className="fw-bold m-0">Profile Details</h3>
                    </div>
                    {/*end::Card title*/}
                    {/*begin::Action*/}
                    <a href="/edit" className="btn btn-sm btn-primary align-self-center">Edit Profile</a>
                    {/*end::Action*/}
                  </div>
                  {/*begin::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body p-9">
                    {/*begin::Row*/}
                    <div className="row mb-7">
                      {/*begin::Label*/}
                      <label className="col-lg-4 fw-semibold text-muted">Full Name</label>
                      {/*end::Label*/}
                      {/*begin::Col*/}
                      <div className="col-lg-8">
                        <span className="fw-bold fs-6 text-gray-800">Max Smith</span>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                    {/*begin::Input group*/}
                    <div className="row mb-7">
                      {/*begin::Label*/}
                      <label className="col-lg-4 fw-semibold text-muted">Company</label>
                      {/*end::Label*/}
                      {/*begin::Col*/}
                      <div className="col-lg-8 fv-row">
                        <span className="fw-semibold text-gray-800 fs-6">Keenthemes</span>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-7">
                      {/*begin::Label*/}
                      <label className="col-lg-4 fw-semibold text-muted">Contact Phone
                        <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active" /></label>
                      {/*end::Label*/}
                      {/*begin::Col*/}
                      <div className="col-lg-8 d-flex align-items-center">
                        <span className="fw-bold fs-6 text-gray-800 me-2">044 3276 454 935</span>
                        <span className="badge badge-success">Verified</span>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-7">
                      {/*begin::Label*/}
                      <label className="col-lg-4 fw-semibold text-muted">Company Site</label>
                      {/*end::Label*/}
                      {/*begin::Col*/}
                      <div className="col-lg-8">
                        <a href="#" className="fw-semibold fs-6 text-gray-800 text-hover-primary">keenthemes.com</a>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-7">
                      {/*begin::Label*/}
                      <label className="col-lg-4 fw-semibold text-muted">Country
                        <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination" /></label>
                      {/*end::Label*/}
                      {/*begin::Col*/}
                      <div className="col-lg-8">
                        <span className="fw-bold fs-6 text-gray-800">Germany</span>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-7">
                      {/*begin::Label*/}
                      <label className="col-lg-4 fw-semibold text-muted">Communication</label>
                      {/*end::Label*/}
                      {/*begin::Col*/}
                      <div className="col-lg-8">
                        <span className="fw-bold fs-6 text-gray-800">Email, Phone</span>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-10">
                      {/*begin::Label*/}
                      <label className="col-lg-4 fw-semibold text-muted">Allow Changes</label>
                      {/*begin::Label*/}
                      {/*begin::Label*/}
                      <div className="col-lg-8">
                        <span className="fw-semibold fs-6 text-gray-800">Yes</span>
                      </div>
                      {/*begin::Label*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Notice*/}
                    <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                      {/*begin::Icon*/}
                      {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                      <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                          <rect x={11} y={14} width={7} height={2} rx={1} transform="rotate(-90 11 14)" fill="currentColor" />
                          <rect x={11} y={17} width={2} height={2} rx={1} transform="rotate(-90 11 17)" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      {/*end::Icon*/}
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-stack flex-grow-1">
                        {/*begin::Content*/}
                        <div className="fw-semibold">
                          <h4 className="text-gray-900 fw-bold">We need your attention!</h4>
                          <div className="fs-6 text-gray-700">Your payment was declined. To start using tools, please
                            <a className="fw-bold" href="../../demo1/dist/account/billing.html">Add Payment Method</a>.</div>
                        </div>
                        {/*end::Content*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Notice*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::details View*/}
                {/*begin::Row*/}
                <div className="row gy-5 g-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xl-8 mb-xl-10">
                    {/*begin::Chart widget 5*/}
                    <div className="card card-flush h-lg-100">
                      {/*begin::Header*/}
                      <div className="card-header flex-nowrap pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-dark">Top Selling Categories</span>
                          <span className="text-gray-400 pt-2 fw-semibold fs-6">8k social visitors</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                            <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu 2*/}
                          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">New Ticket</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">New Customer</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              {/*begin::Menu item*/}
                              <a href="#" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Admin Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Staff Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Member Group</a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">New Contact</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-5 ps-6">
                        <div id="kt_charts_widget_5" className="min-h-auto" />
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Chart widget 5*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-4 mb-5 mb-xl-10">
                    {/*begin::Engage widget 1*/}
                    <div className="card h-md-100" dir="ltr">
                      {/*begin::Body*/}
                      <div className="card-body d-flex flex-column flex-center">
                        {/*begin::Heading*/}
                        <div className="mb-2">
                          {/*begin::Title*/}
                          <h1 className="fw-semibold text-gray-800 text-center lh-lg">Have you tried
                            <br />new
                            <span className="fw-bolder">Mobile Application ?</span></h1>
                          {/*end::Title*/}
                          {/*begin::Illustration*/}
                          <div className="py-10 text-center">
                            <img src="assets/media/svg/illustrations/easy/1.svg" className="theme-light-show w-200px" alt />
                            <img src="assets/media/svg/illustrations/easy/1-dark.svg" className="theme-dark-show w-200px" alt />
                          </div>
                          {/*end::Illustration*/}
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Links*/}
                        <div className="text-center mb-1">
                          {/*begin::Link*/}
                          <a className="btn btn-sm btn-primary me-2" data-bs-target="#kt_modal_create_app" data-bs-toggle="modal">Try now</a>
                          {/*end::Link*/}
                          {/*begin::Link*/}
                          <a className="btn btn-sm btn-light" href="../../demo1/dist/apps/invoices/view/invoice-1.html">Learn more</a>
                          {/*end::Link*/}
                        </div>
                        {/*end::Links*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Engage widget 1*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row gy-5 g-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xl-4">
                    {/*begin::List widget 5*/}
                    <div className="card card-flush h-xl-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-7">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-dark">Product Delivery</span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">1M Products Shipped so far</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="btn btn-sm btn-light">Order Details</a>
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body">
                        {/*begin::Scroll*/}
                        <div className="hover-scroll-overlay-y pe-6 me-n6" style={{height: 415}}>
                          {/*begin::Item*/}
                          <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                            {/*begin::Info*/}
                            <div className="d-flex flex-stack mb-3">
                              {/*begin::Wrapper*/}
                              <div className="me-3">
                                {/*begin::Icon*/}
                                <img src="assets/media/stock/ecommerce/210.gif" className="w-50px ms-n1 me-1" alt />
                                {/*end::Icon*/}
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fw-bold">Elephant 1802</a>
                                {/*end::Title*/}
                              </div>
                              {/*end::Wrapper*/}
                              {/*begin::Action*/}
                              <div className="m-0">
                                {/*begin::Menu*/}
                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                  <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                      <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </button>
                                {/*begin::Menu 2*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mb-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Customer</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <a href="#" className="menu-link px-3">
                                      <span className="menu-title">New Group</span>
                                      <span className="menu-arrow" />
                                    </a>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu sub*/}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Member Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu sub*/}
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Contact</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mt-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content px-3 py-3">
                                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                    </div>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                                {/*end::Menu 2*/}
                                {/*end::Menu*/}
                              </div>
                              {/*end::Action*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Customer*/}
                            <div className="d-flex flex-stack">
                              {/*begin::Name*/}
                              <span className="text-gray-400 fw-bold">To:
                                <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">Jason Bourne</a></span>
                              {/*end::Name*/}
                              {/*begin::Label*/}
                              <span className="badge badge-light-success">Delivered</span>
                              {/*end::Label*/}
                            </div>
                            {/*end::Customer*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                            {/*begin::Info*/}
                            <div className="d-flex flex-stack mb-3">
                              {/*begin::Wrapper*/}
                              <div className="me-3">
                                {/*begin::Icon*/}
                                <img src="assets/media/stock/ecommerce/209.gif" className="w-50px ms-n1 me-1" alt />
                                {/*end::Icon*/}
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fw-bold">RiseUP</a>
                                {/*end::Title*/}
                              </div>
                              {/*end::Wrapper*/}
                              {/*begin::Action*/}
                              <div className="m-0">
                                {/*begin::Menu*/}
                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                  <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                      <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </button>
                                {/*begin::Menu 2*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mb-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Customer</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <a href="#" className="menu-link px-3">
                                      <span className="menu-title">New Group</span>
                                      <span className="menu-arrow" />
                                    </a>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu sub*/}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Member Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu sub*/}
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Contact</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mt-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content px-3 py-3">
                                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                    </div>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                                {/*end::Menu 2*/}
                                {/*end::Menu*/}
                              </div>
                              {/*end::Action*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Customer*/}
                            <div className="d-flex flex-stack">
                              {/*begin::Name*/}
                              <span className="text-gray-400 fw-bold">To:
                                <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">Marie Durant</a></span>
                              {/*end::Name*/}
                              {/*begin::Label*/}
                              <span className="badge badge-light-primary">Shipping</span>
                              {/*end::Label*/}
                            </div>
                            {/*end::Customer*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                            {/*begin::Info*/}
                            <div className="d-flex flex-stack mb-3">
                              {/*begin::Wrapper*/}
                              <div className="me-3">
                                {/*begin::Icon*/}
                                <img src="assets/media/stock/ecommerce/214.gif" className="w-50px ms-n1 me-1" alt />
                                {/*end::Icon*/}
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fw-bold">Yellow Stone</a>
                                {/*end::Title*/}
                              </div>
                              {/*end::Wrapper*/}
                              {/*begin::Action*/}
                              <div className="m-0">
                                {/*begin::Menu*/}
                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                  <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                      <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </button>
                                {/*begin::Menu 2*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mb-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Customer</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <a href="#" className="menu-link px-3">
                                      <span className="menu-title">New Group</span>
                                      <span className="menu-arrow" />
                                    </a>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu sub*/}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Member Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu sub*/}
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Contact</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mt-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content px-3 py-3">
                                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                    </div>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                                {/*end::Menu 2*/}
                                {/*end::Menu*/}
                              </div>
                              {/*end::Action*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Customer*/}
                            <div className="d-flex flex-stack">
                              {/*begin::Name*/}
                              <span className="text-gray-400 fw-bold">To:
                                <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">Dan Wilson</a></span>
                              {/*end::Name*/}
                              {/*begin::Label*/}
                              <span className="badge badge-light-danger">Confirmed</span>
                              {/*end::Label*/}
                            </div>
                            {/*end::Customer*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                            {/*begin::Info*/}
                            <div className="d-flex flex-stack mb-3">
                              {/*begin::Wrapper*/}
                              <div className="me-3">
                                {/*begin::Icon*/}
                                <img src="assets/media/stock/ecommerce/211.gif" className="w-50px ms-n1 me-1" alt />
                                {/*end::Icon*/}
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fw-bold">Elephant 1802</a>
                                {/*end::Title*/}
                              </div>
                              {/*end::Wrapper*/}
                              {/*begin::Action*/}
                              <div className="m-0">
                                {/*begin::Menu*/}
                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                  <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                      <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </button>
                                {/*begin::Menu 2*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mb-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Customer</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <a href="#" className="menu-link px-3">
                                      <span className="menu-title">New Group</span>
                                      <span className="menu-arrow" />
                                    </a>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu sub*/}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Member Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu sub*/}
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Contact</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mt-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content px-3 py-3">
                                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                    </div>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                                {/*end::Menu 2*/}
                                {/*end::Menu*/}
                              </div>
                              {/*end::Action*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Customer*/}
                            <div className="d-flex flex-stack">
                              {/*begin::Name*/}
                              <span className="text-gray-400 fw-bold">To:
                                <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">Lebron Wayde</a></span>
                              {/*end::Name*/}
                              {/*begin::Label*/}
                              <span className="badge badge-light-success">Delivered</span>
                              {/*end::Label*/}
                            </div>
                            {/*end::Customer*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                            {/*begin::Info*/}
                            <div className="d-flex flex-stack mb-3">
                              {/*begin::Wrapper*/}
                              <div className="me-3">
                                {/*begin::Icon*/}
                                <img src="assets/media/stock/ecommerce/215.gif" className="w-50px ms-n1 me-1" alt />
                                {/*end::Icon*/}
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fw-bold">RiseUP</a>
                                {/*end::Title*/}
                              </div>
                              {/*end::Wrapper*/}
                              {/*begin::Action*/}
                              <div className="m-0">
                                {/*begin::Menu*/}
                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                  <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                      <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </button>
                                {/*begin::Menu 2*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mb-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Customer</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <a href="#" className="menu-link px-3">
                                      <span className="menu-title">New Group</span>
                                      <span className="menu-arrow" />
                                    </a>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu sub*/}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Member Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu sub*/}
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Contact</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mt-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content px-3 py-3">
                                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                    </div>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                                {/*end::Menu 2*/}
                                {/*end::Menu*/}
                              </div>
                              {/*end::Action*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Customer*/}
                            <div className="d-flex flex-stack">
                              {/*begin::Name*/}
                              <span className="text-gray-400 fw-bold">To:
                                <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">Ana Simmons</a></span>
                              {/*end::Name*/}
                              {/*begin::Label*/}
                              <span className="badge badge-light-primary">Shipping</span>
                              {/*end::Label*/}
                            </div>
                            {/*end::Customer*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="border border-dashed border-gray-300 rounded px-7 py-3">
                            {/*begin::Info*/}
                            <div className="d-flex flex-stack mb-3">
                              {/*begin::Wrapper*/}
                              <div className="me-3">
                                {/*begin::Icon*/}
                                <img src="assets/media/stock/ecommerce/192.gif" className="w-50px ms-n1 me-1" alt />
                                {/*end::Icon*/}
                                {/*begin::Title*/}
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fw-bold">Yellow Stone</a>
                                {/*end::Title*/}
                              </div>
                              {/*end::Wrapper*/}
                              {/*begin::Action*/}
                              <div className="m-0">
                                {/*begin::Menu*/}
                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                                  <span className="svg-icon svg-icon-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                      <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                      <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </button>
                                {/*begin::Menu 2*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mb-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Customer</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                    {/*begin::Menu item*/}
                                    <a href="#" className="menu-link px-3">
                                      <span className="menu-title">New Group</span>
                                      <span className="menu-arrow" />
                                    </a>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu sub*/}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Member Group</a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu sub*/}
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Contact</a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu separator*/}
                                  <div className="separator mt-3 opacity-75" />
                                  {/*end::Menu separator*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item px-3">
                                    <div className="menu-content px-3 py-3">
                                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                    </div>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                                {/*end::Menu 2*/}
                                {/*end::Menu*/}
                              </div>
                              {/*end::Action*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Customer*/}
                            <div className="d-flex flex-stack">
                              {/*begin::Name*/}
                              <span className="text-gray-400 fw-bold">To:
                                <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">Kevin Leonard</a></span>
                              {/*end::Name*/}
                              {/*begin::Label*/}
                              <span className="badge badge-light-danger">Confirmed</span>
                              {/*end::Label*/}
                            </div>
                            {/*end::Customer*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Scroll*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::List widget 5*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-8">
                    {/*begin::Table Widget 5*/}
                    <div className="card card-flush h-xl-100">
                      {/*begin::Card header*/}
                      <div className="card-header pt-7">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-dark">Stock Report</span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">Total 2,356 Items in the Stock</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Actions*/}
                        <div className="card-toolbar">
                          {/*begin::Filters*/}
                          <div className="d-flex flex-stack flex-wrap gap-4">
                            {/*begin::Destination*/}
                            <div className="d-flex align-items-center fw-bold">
                              {/*begin::Label*/}
                              <div className="text-muted fs-7 me-2">Cateogry</div>
                              {/*end::Label*/}
                              {/*begin::Select*/}
                              <select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-class="w-150px" data-placeholder="Select an option">
                                <option />
                                <option value="Show All" selected="selected">Show All</option>
                                <option value="a">Category A</option>
                                <option value="b">Category B</option>
                              </select>
                              {/*end::Select*/}
                            </div>
                            {/*end::Destination*/}
                            {/*begin::Status*/}
                            <div className="d-flex align-items-center fw-bold">
                              {/*begin::Label*/}
                              <div className="text-muted fs-7 me-2">Status</div>
                              {/*end::Label*/}
                              {/*begin::Select*/}
                              <select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-class="w-150px" data-placeholder="Select an option" data-kt-table-widget-5="filter_status">
                                <option />
                                <option value="Show All" selected="selected">Show All</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                                <option value="Low Stock">Low Stock</option>
                              </select>
                              {/*end::Select*/}
                            </div>
                            {/*end::Status*/}
                            {/*begin::Search*/}
                            <a href="../../demo1/dist/apps/ecommerce/catalog/products.html" className="btn btn-light btn-sm">View Stock</a>
                            {/*end::Search*/}
                          </div>
                          {/*begin::Filters*/}
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body">
                        {/*begin::Table*/}
                        <table className="table align-middle table-row-dashed fs-6 gy-3" id="kt_table_widget_5_table">
                          {/*begin::Table head*/}
                          <thead>
                            {/*begin::Table row*/}
                            <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                              <th className="min-w-100px">Item</th>
                              <th className="text-end pe-3 min-w-100px">Product ID</th>
                              <th className="text-end pe-3 min-w-150px">Date Added</th>
                              <th className="text-end pe-3 min-w-100px">Price</th>
                              <th className="text-end pe-3 min-w-50px">Status</th>
                              <th className="text-end pe-0 min-w-25px">Qty</th>
                            </tr>
                            {/*end::Table row*/}
                          </thead>
                          {/*end::Table head*/}
                          {/*begin::Table body*/}
                          <tbody className="fw-bold text-gray-600">
                            <tr>
                              {/*begin::Item*/}
                              <td>
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Macbook Air M1</a>
                              </td>
                              {/*end::Item*/}
                              {/*begin::Product ID*/}
                              <td className="text-end">#XGY-356</td>
                              {/*end::Product ID*/}
                              {/*begin::Date added*/}
                              <td className="text-end">02 Apr, 2023</td>
                              {/*end::Date added*/}
                              {/*begin::Price*/}
                              <td className="text-end">$1,230</td>
                              {/*end::Price*/}
                              {/*begin::Status*/}
                              <td className="text-end">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                              </td>
                              {/*end::Status*/}
                              {/*begin::Qty*/}
                              <td className="text-end" data-order={58}>
                                <span className="text-dark fw-bold">58 PCS</span>
                              </td>
                              {/*end::Qty*/}
                            </tr>
                            <tr>
                              {/*begin::Item*/}
                              <td>
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Surface Laptop 4</a>
                              </td>
                              {/*end::Item*/}
                              {/*begin::Product ID*/}
                              <td className="text-end">#YHD-047</td>
                              {/*end::Product ID*/}
                              {/*begin::Date added*/}
                              <td className="text-end">01 Apr, 2023</td>
                              {/*end::Date added*/}
                              {/*begin::Price*/}
                              <td className="text-end">$1,060</td>
                              {/*end::Price*/}
                              {/*begin::Status*/}
                              <td className="text-end">
                                <span className="badge py-3 px-4 fs-7 badge-light-danger">Out of Stock</span>
                              </td>
                              {/*end::Status*/}
                              {/*begin::Qty*/}
                              <td className="text-end" data-order={0}>
                                <span className="text-dark fw-bold">0 PCS</span>
                              </td>
                              {/*end::Qty*/}
                            </tr>
                            <tr>
                              {/*begin::Item*/}
                              <td>
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Logitech MX 250</a>
                              </td>
                              {/*end::Item*/}
                              {/*begin::Product ID*/}
                              <td className="text-end">#SRR-678</td>
                              {/*end::Product ID*/}
                              {/*begin::Date added*/}
                              <td className="text-end">24 Mar, 2023</td>
                              {/*end::Date added*/}
                              {/*begin::Price*/}
                              <td className="text-end">$64</td>
                              {/*end::Price*/}
                              {/*begin::Status*/}
                              <td className="text-end">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                              </td>
                              {/*end::Status*/}
                              {/*begin::Qty*/}
                              <td className="text-end" data-order={290}>
                                <span className="text-dark fw-bold">290 PCS</span>
                              </td>
                              {/*end::Qty*/}
                            </tr>
                            <tr>
                              {/*begin::Item*/}
                              <td>
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">AudioEngine HD3</a>
                              </td>
                              {/*end::Item*/}
                              {/*begin::Product ID*/}
                              <td className="text-end">#PXF-578</td>
                              {/*end::Product ID*/}
                              {/*begin::Date added*/}
                              <td className="text-end">24 Mar, 2023</td>
                              {/*end::Date added*/}
                              {/*begin::Price*/}
                              <td className="text-end">$1,060</td>
                              {/*end::Price*/}
                              {/*begin::Status*/}
                              <td className="text-end">
                                <span className="badge py-3 px-4 fs-7 badge-light-danger">Out of Stock</span>
                              </td>
                              {/*end::Status*/}
                              {/*begin::Qty*/}
                              <td className="text-end" data-order={46}>
                                <span className="text-dark fw-bold">46 PCS</span>
                              </td>
                              {/*end::Qty*/}
                            </tr>
                            <tr>
                              {/*begin::Item*/}
                              <td>
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">HP Hyper LTR</a>
                              </td>
                              {/*end::Item*/}
                              {/*begin::Product ID*/}
                              <td className="text-end">#PXF-778</td>
                              {/*end::Product ID*/}
                              {/*begin::Date added*/}
                              <td className="text-end">16 Jan, 2023</td>
                              {/*end::Date added*/}
                              {/*begin::Price*/}
                              <td className="text-end">$4500</td>
                              {/*end::Price*/}
                              {/*begin::Status*/}
                              <td className="text-end">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                              </td>
                              {/*end::Status*/}
                              {/*begin::Qty*/}
                              <td className="text-end" data-order={78}>
                                <span className="text-dark fw-bold">78 PCS</span>
                              </td>
                              {/*end::Qty*/}
                            </tr>
                            <tr>
                              {/*begin::Item*/}
                              <td>
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Dell 32 UltraSharp</a>
                              </td>
                              {/*end::Item*/}
                              {/*begin::Product ID*/}
                              <td className="text-end">#XGY-356</td>
                              {/*end::Product ID*/}
                              {/*begin::Date added*/}
                              <td className="text-end">22 Dec, 2023</td>
                              {/*end::Date added*/}
                              {/*begin::Price*/}
                              <td className="text-end">$1,060</td>
                              {/*end::Price*/}
                              {/*begin::Status*/}
                              <td className="text-end">
                                <span className="badge py-3 px-4 fs-7 badge-light-warning">Low Stock</span>
                              </td>
                              {/*end::Status*/}
                              {/*begin::Qty*/}
                              <td className="text-end" data-order={8}>
                                <span className="text-dark fw-bold">8 PCS</span>
                              </td>
                              {/*end::Qty*/}
                            </tr>
                            <tr>
                              {/*begin::Item*/}
                              <td>
                                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-dark text-hover-primary">Google Pixel 6 Pro</a>
                              </td>
                              {/*end::Item*/}
                              {/*begin::Product ID*/}
                              <td className="text-end">#XVR-425</td>
                              {/*end::Product ID*/}
                              {/*begin::Date added*/}
                              <td className="text-end">27 Dec, 2023</td>
                              {/*end::Date added*/}
                              {/*begin::Price*/}
                              <td className="text-end">$1,060</td>
                              {/*end::Price*/}
                              {/*begin::Status*/}
                              <td className="text-end">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                              </td>
                              {/*end::Status*/}
                              {/*begin::Qty*/}
                              <td className="text-end" data-order={124}>
                                <span className="text-dark fw-bold">124 PCS</span>
                              </td>
                              {/*end::Qty*/}
                            </tr>
                          </tbody>
                          {/*end::Table body*/}
                        </table>
                        {/*end::Table*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Table Widget 5*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
          <div id="kt_app_footer" className="app-footer">
            {/*begin::Footer container*/}
            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
              {/*begin::Copyright*/}
              <div className="text-dark order-2 order-md-1">
                <span className="text-muted fw-semibold me-1">2023©</span>
                <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
              </div>
              {/*end::Copyright*/}
              {/*begin::Menu*/}
              <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li className="menu-item">
                  <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                </li>
                <li className="menu-item">
                  <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                </li>
                <li className="menu-item">
                  <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
                </li>
              </ul>
              {/*end::Menu*/}
            </div>
            {/*end::Footer container*/}
          </div>
          {/*end::Footer*/}
        </div>
<Footer/>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>
  {/*end::App*/}
  <Rest/>
  <Helmet>
    <script src={process.env.PUBLIC_URL+"/dist/assets/plugins/custom/datatables/datatables.bundle.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/pages/user-profile/general.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/widgets.bundle.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/widgets.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/apps/chat/chat.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/upgrade-plan.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/create-app.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/type.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/details.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/finance.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/complete.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/offer-a-deal/main.js"}></script>
    <script src={process.env.PUBLIC_URL+"/dist/assets/js/custom/utilities/modals/users-search.js"}></script>
    </Helmet>
</div>

  )
}

export default Profile