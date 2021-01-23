import {RouteConfig} from "vue-router";

export const appRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/Dashboard.vue')
    },
    {
        path: 'complaint/view/:complaintId',
        name: 'View Complaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/Complaint.vue')
    },
    {
        path: 'utils/divisions',
        name: 'DivisionalOffices',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/Division.vue')
    },
    {
        path: 'utils/gn-offices',
        name: 'GnOffices',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/GnOffice.vue')
    },
    {
        path: 'utils/user-accounts',
        name: 'UserAccounts',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/UserList.vue')
    },
    {
        path: 'complaint/find-complaint',
        name: 'FindComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/AllComplaint.vue')
    },

    // District Officer
    {
        path: 'complaint/create-new',
        name: 'NewComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/AddComplaint.vue')
    },
    {
        path: 'complaint/drafts',
        name: 'DraftComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/DraftComplaint.vue')
    },
    {
        path: 'complaint/approved',
        name: 'ApprovedComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/ApprovedComplaint.vue')
    },
    {
        path: 'complaint/reviewed',
        name: 'ReviewedComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/ReviewedComplaint.vue')
    },
    {
        path: 'complaint/solved',
        name: 'SolvedComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/SolvedComplaint.vue')
    },
    {
        path: 'complaint/rejected',
        name: 'RejectedComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/RejectedComplaint.vue')
    },

    // District Secretariat
    {
        path: 'complaint/for-approve',
        name: 'ApproveComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-sec/ApproveComplaint.vue')
    },
    {
        path: 'complaint/for-review',
        name: 'Dis-ReviewComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-sec/ReviewComplaint.vue')
    },

    // Divisional Officer
    {
        path: 'complaint/for-accept',
        name: 'AcceptComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/div-officer/AcceptComplaint.vue')
    },
    {
        path: 'complaint/in-progress',
        name: 'InProgress',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/div-officer/InProgressComplaint.vue')
    },
    {
        path: 'complaint/div-reviewed',
        name: 'Div-ReviewedComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/div-officer/DivReviewedComplaint.vue')
    },

    // Divisional Secretariat
    {
        path: 'complaint/for-div-review',
        name: 'Div-ReviewComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/div-sec/DivReviewComplaint.vue')
    }
]