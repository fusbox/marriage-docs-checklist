export type Task = {
    id: string;
    title: string;
    assignee: 'Jane/Phil' | 'Fu' | 'Both';
    internalDeadline: string;
    statutoryDeadline?: string;
    status: 'Pending' | 'Completed';
    category: 'Certificate Details' | 'Application Prep' | 'Pre-Ceremony' | 'Ceremony' | 'Post-Ceremony';
};

export const INITIAL_TASKS: Task[] = [
    { id: 't-details', title: 'Enter Details', assignee: 'Jane/Phil', internalDeadline: 'Before Ceremony', status: 'Pending', category: 'Certificate Details' },
    { id: 't1', title: 'Complete Section B of Application', assignee: 'Jane/Phil', internalDeadline: '3/8', status: 'Pending', category: 'Application Prep' },
    { id: 't2', title: 'Print Character Reference (Page 4)', assignee: 'Jane/Phil', internalDeadline: '3/8', status: 'Pending', category: 'Application Prep' },
    { id: 't3', title: 'Complete Sections A & C of Application', assignee: 'Fu', internalDeadline: '3/10', status: 'Pending', category: 'Application Prep' },
    { id: 't3-notarize', title: 'Notarize Application (Section A)', assignee: 'Fu', internalDeadline: '3/12', status: 'Pending', category: 'Application Prep' },
    { id: 't3-mail', title: 'Mail Notarized Application to Phil', assignee: 'Fu', internalDeadline: '3/13', status: 'Pending', category: 'Application Prep' },
    { id: 't4', title: 'Notarize Character Reference', assignee: 'Jane/Phil', internalDeadline: '3/14', status: 'Pending', category: 'Application Prep' },
    { id: 't7', title: 'Mail/Deliver Package to County Clerk', assignee: 'Jane/Phil', internalDeadline: '3/20', statutoryDeadline: '3/26', status: 'Pending', category: 'Application Prep' },

    { id: 't8', title: 'Pre-Apply for Marriage License Online', assignee: 'Jane/Phil', internalDeadline: '4/18', statutoryDeadline: '4/25', status: 'Pending', category: 'Pre-Ceremony' },
    { id: 't9', title: 'Pick up Marriage License in Person', assignee: 'Jane/Phil', internalDeadline: '4/24', statutoryDeadline: '4/25', status: 'Pending', category: 'Pre-Ceremony' },
    { id: 't10', title: 'Verify License Details', assignee: 'Jane/Phil', internalDeadline: '4/24', statutoryDeadline: '4/25', status: 'Pending', category: 'Pre-Ceremony' },

    { id: 't11', title: 'Obtain Marriage License from Jane/Phil', assignee: 'Fu', internalDeadline: '4/25', statutoryDeadline: '4/25', status: 'Pending', category: 'Ceremony' },
    { id: 't12', title: 'Perform Ceremony with Witness', assignee: 'Fu', internalDeadline: '4/25', statutoryDeadline: '4/25', status: 'Pending', category: 'Ceremony' },
    { id: 't13', title: 'Complete Certificate & Keepsake', assignee: 'Fu', internalDeadline: '4/25', status: 'Pending', category: 'Ceremony' },
    { id: 't14', title: 'Give Keepsake to Jane/Phil', assignee: 'Fu', internalDeadline: '4/25', status: 'Pending', category: 'Ceremony' },

    { id: 't15', title: 'File Original Marriage Certificate', assignee: 'Fu', internalDeadline: '4/28', statutoryDeadline: '5/5', status: 'Pending', category: 'Post-Ceremony' },
    { id: 't16', title: 'Order Certified Copies', assignee: 'Jane/Phil', internalDeadline: '5/15', status: 'Pending', category: 'Post-Ceremony' }
];
