interface NavItemData {
    name: string,
    icon: string,
    link: string
}

function bn(name: string, icon: string, link: string): NavItemData {
    return {name, icon, link}
}

const draft     = bn('Drafts', 'mdi-file-document-edit', '/app/complaint/drafts')
const create    = bn('Add New', 'mdi-file-plus', '/app/complaint/create-new')
const approved  = bn('Approved', 'mdi-file-certificate', '')
const received  = bn('Processed', 'mdi-file-replace', '')
const reviewed  = bn('Reviewed', 'mdi-file-check', '')

const approve   = bn('Approve', 'mdi-file-certificate', '')
const review    = bn('Approve', 'mdi-file-certificate', '')

const accept    = bn('Accept Complaint', 'mdi-file-document-edit', '')
const submit    = bn('Submit Complaint', 'mdi-file-document-edit', '')
const solved    = bn('Solved Complaint', 'mdi-file-document-edit', '')
const reject    = bn('Rejected Complaint', 'mdi-file-document-edit', '')

const find      = bn('Find Complaint', 'mdi-file-document-edit', '')
const users     = bn('User Account', 'mdi-account', '/app/utils/user-accounts')
const div       = bn('Divisional Offices', 'mdi-office-building', '/app/utils/divisions')
const gn        = bn('Grama N. Offices', 'mdi-home', '/app/utils/gn-offices')

export const admin = [
    find,
    users,
    div,
    gn
]

export const dis_officer = [
    create,
    draft,
    approved,
    received,
    reviewed
]

export const dis_sec = [
    approve
]

export const div_officer = [

]

export const div_sec = [

]