var app = angular.module("languages", []);

// Language provider
app.config(function ($translateProvider) {

    $translateProvider.translations('de_DE', {
        // TODO
    });

    $translateProvider.translations('en_US', {

        WELCOME: 'Welcome',
        WELCOME_MESSAGE: 'This Web-App provides a way to create the necessary forms for your user study. Please login or create a new document.',
        WELCOME_MESSAGE_MEMBER: 'This is the Login for Members of the Ethics-Committee. If you are not a member of the Ethics-Committee, please login',
        HERE: 'here',

        DOCUMENT_ID: 'Document-ID',
        DOCUMENT_TITLE: 'Document title',
        EMAIL : 'Email',
        EMAIL_ADDRESS : 'Email-address',
        TITLE : 'Title',
        FIRST_NAME : 'First name',
        LAST_NAME : 'Last name',
        FULL_NAME: 'Full name',
        HELP: 'Help',
        MANUAL: 'Manual',
        CREATE_NEW_DOCUMENT: 'Create a new document',
        FORGOT_YOUR_DOCUMENT_ID: 'Forgot your document-ID',
        FORGOT_YOUR_PASSWORD: 'Forgot your password',
        PASSWORD: 'Password',

        LOGIN : 'Login',
        SIGN_UP:'Sign up',
        SUBMIT : 'Submit',
        SEND: 'Send',
        SAVE: 'Save',
        DELETE: 'Delete',
        CANCEL: 'Cancel',
        NEXT: 'Next',
        NEXT_PAGE: 'Next page',
        PREVIOUS_PAGE: 'Previous page',
        BACK: 'Back',
        SEARCH: 'Search',
        SEND_RECOVERY_EMAIL: 'Send recovery email',
        SHOW_INTRO: 'Show introduction',
        RECOVERY: 'Recovery',
        REGISTRATION: 'Registration',
        NEW_DOCUMENT: 'New document',
        PLEASE_USE_A_UNIVERSITY_ADDRESS: 'Please use an official university address',

        SEARCH_FOR_DOCUMENT_TITLES_AND_AUTHORS: 'Search for documents, titles and authors',
        SEARCH_FOR_MEMBERS: 'Search for members',
        SEARCH_FOR_USERS: 'Search for users',
        SEARCH_FOR_COURSES: 'Search for courses',
        SEARCH_FOR_UNIVERSITIES: 'Search for universities',
        SEARCH_FOR_INSTITUTES: 'Search for institutes',
        SEARCH_FOR_WORKING_GROUPS: 'Search for working groups',

        NO_FILTER: 'No filter',
        FILTER_BY_COURSE: 'Filter by course',
        FILTER_BY_STATUS: 'Filter by status',
        SORT_BY: 'Sort by',
        WITH_A_COURSE: 'With a course',
        WITHOUT_A_COURSE: 'Without a course',
        CREATED_ASC: 'Created ascending',
        CREATED_DESC: 'Created descending',
        UPDATED_ASC: 'Updated ascending',
        UPDATED_DESC: 'Updated descending',
        STATUS_ASC: 'Status number ascending',
        STATUS_DESC: 'Status number descending',
        TITLE_ASC: 'Title ascending',
        TITLE_DESC: 'Title descending',
        NAME_ASC: 'Name ascending',
        NAME_DESC: 'Name descending',
        YEAR_ASC: 'Year ascending',
        YEAR_DESC: 'Year descending',

        DELETE_THIS_DOCUMENT: 'Do you really want to delete this document',
        PLEASE_TYPE_IN_THE_TITLE_OF_THE_DOCUMENT_TO_CONFIRM: 'Please type in the title of the document to confirm',

        DELETE_THIS_COURSE: 'Do you really want to delete this course',
        PLEASE_TYPE_IN_THE_COURSE_NAME_TO_CONFIRM: 'Please type in the name of the course to confirm',

        DELETE_THIS_USER: 'Do you really want to delete this user',
        EXPLANATION_OF_DELETING_A_USER: 'Deleting an user also deletes ALL ASSOCIATED documents. PLEASE PROCEED WITH CAUTION!',
        USER_NAME: 'Full name of the user',
        PLEASE_TYPE_IN_THE_FULL_NAME_OF_THE_USER_TO_CONFIRM: 'Please type in the full name of the user to confirm',
        ALTERNATIVE_USER: 'If you don\'t want to delete EVERYTHING associated with this user you can temporary blocked the user',

        DELETE_THIS_MEMBER: 'Do you really want to delete this member',
        DELETE_THIS_ADMINISTRATOR: 'Do you really want to delete this administrator',
        EXPLANATION_OF_DELETING_A_MEMBER: 'Deleting an committee member also deletes ALL ASSOCIATED reviews. PLEASE PROCEED WITH CAUTION!',
        MEMBER_NAME: 'Full name of the member',
        PLEASE_TYPE_IN_THE_FULL_NAME_OF_THE_MEMBER_TO_CONFIRM: 'Please type in the full name of the member to confirm',
        ALTERNATIVE_MEMBER: 'If you don\'t want to delete EVERYTHING associated with this member you can change the member to a former member',
        ALTERNATIVE_ADMIN: 'An administrator can not be deleted, but you can revoke the admin priviliges and then change the member to a former member or delete the member',

        DELETE_THIS_UNIVERSITY: 'Do you really want to delete this university',
        EXPLANATION_OF_DELETING_A_UNIVERSITY: 'Deleting an university also deletes ALL ASSOCIATED institutes, working groups, committee members, users and documents. PLEASE PROCEED WITH CAUTION!',
        UNIVERSITY_NAME: 'University name',
        PLEASE_TYPE_IN_THE_UNIVERSITY_NAME_TO_CONFIRM: 'Please type in the name of the university to confirm',

        DELETE_THIS_INSTITUTE: 'Do you really want to delete this institute',
        EXPLANATION_OF_DELETING_A_INSTITUTE: 'Deleting an institute also deletes ALL ASSOCIATED working groups, committe members, users and documents. PLEASE PROCEED WITH CAUTION!',
        INSTITUTE_NAME: 'Institute name',
        PLEASE_TYPE_IN_THE_INSTITUTE_NAME_TO_CONFIRM: 'Please type in the name of the institute to confirm',
        ALTERNATIVE_INSTITUTE: 'If you don\'t want to delete EVERYTHING associated with this institute you can change it to a former institute',

        DELETE_THIS_WORKING_GROUP: 'Do you really want to delete this working group',
        EXPLANATION_OF_DELETING_A_WORKING_GROUP: 'Deleting a working group also deletes ALL ASSOCIATED committee members and their reviews. PLEASE PROCEED WITH CAUTION!',
        WORKING_GROUP_NAME: 'Working group name',
        PLEASE_TYPE_IN_THE_WORKING_GROUP_NAME_TO_CONFIRM: 'Please tpe in the name of the working group to confirm',
        ALTERNATIVE_WORKING_GROUP: 'If you don\'t want to delete EVERYTHING associated with this working group you can change it to a former working group',

        INTRODUCTION_TEXT_FRAGMENT_1: 'This Web-App will guide you in creating the necessary forms for your user study. You will be asked a series of questions, based on which the Ethics-App will auto-generate three documents.',
        INTRODUCTION_TEXT_FRAGMENT_2: 'The Informed Consent form',
        INTRODUCTION_TEXT_FRAGMENT_3: 'This is the most important document. It assures that the Participant gave his consent prior to participating in the study. Both you and your participant must sign the document, and you need to store your copy safely. Conducting a study without the written consent of the participant is not advised and can lead to various legal issues.',
        INTRODUCTION_TEXT_FRAGMENT_4: 'The Statement of the Researcher',
        INTRODUCTION_TEXT_FRAGMENT_5: 'The Statement of the Researcher provides guidelines for carrying out the study itself. You need to sign the Statement and store it savely together with the Informed Consent forms. This form is only for yourself and should not be handed to the participant.',
        INTRODUCTION_TEXT_FRAGMENT_6: 'Debriefing Information',
        INTRODUCTION_TEXT_FRAGMENT_7: 'The Debriefing Information provides a checklist for the debriefing after the experiment. It does not need to be signed as it only serves as a reminder of the most important points that should be mentioned during the debriefing. This list is not complete and needs to be extended based on the specific circumstances of the individual study.',
        INTRODUCTION_TEXT_FRAGMENT_8: 'You are ',
        INTRODUCTION_TEXT_FRAGMENT_9: 'required',
        INTRODUCTION_TEXT_FRAGMENT_10: ' to use these Documents in your experiment.',

        STUDY_DESCRIPTION_FORM_TEXT: 'This form will be used to automatically generate the informed consent form that every participant of your study will have to sign. Please fill out the English version and optionally versions in other languages. Depending on the language(s) filled out, you will receive the informed consent forms in the chosen languages to be used during your experiment.',
        CHOOSE_LANGUAGE:'Please select the language(s), in which you want to generate the informed consent forms:',
        STUDY_CONCERNS_FORM_TEXT: 'Complete the checklist below. If you have answered yes to any of the questions, please provide a brief overview of how you are going to ensure ethical conduct with regard to the given risk. This will be reviewed by the Institutes Ethics committee. Remember that any ethical approval granted based on untrue or incomplete disclosure of your research procedure is invalid. The checklist is intended as a guideline and its role is to alert you in cases where you might be proposing an unethical study. Make sure you discuss any concerns with the members of the Intitutes\'s Ethics committee.',

        AGREEMENT_DATA: 'I agree that all given information is correct, and I am aware that my data will be stored by the Institute responsible for the study and its partners',
        AGREEMENT_DELETION: 'I agree that as soon as I submit my document request, only Members of the Ethics committee can delete my account',

        STATUS_2: 'Your files have been created successfully. Please click on the following icons to download them.',
        STATUS_3: 'Your document was submitted successfully, but has one or more ethical concerns. You will get an email as soon as the committee start to review it.',
        STATUS_4: 'Your document was submitted successfully, but has one or more ethical concerns. The committee has started to review it. You will get an email as soon as the committee has reviewed it completely.',
        STATUS_5: 'Your document has been partly accepted by the committee. Please read the comments and revise your document.',
        STATUS_6: 'Your files have been created successfully. Please click on the following icons to download them.',
        STATUS_7: 'Unfortunatly your document has been rejected by the Ethics committee. Please get in contact with the corresponding reviewers.',

        ACCOUNT: 'Account',
        SETTINGS: 'Settings',
        DOCUMENT_SETTINGS: 'Document settings',
        ADMINISTRATION: 'Administration',
        DOCUMENT: 'Document',
        DOCUMENTS: 'Documents',
        LOGOUT: 'Logout',
        SHOW_DOCUMENT_ID: 'Show document-ID',
        SHOW_DOCUMENT_INTRO: 'Show introduction',
        SHOW_FILES: 'Show files',
        CHANGE_DOCUMENT_SETTINGS: 'Change document settings',
        SAVE_DOCUMENT: 'Save document',
        DELETE_DOCUMENT: 'Delete document',
        YOUR_DOCUMENT_ID: 'Your document-ID',
        YOUR_ACCOUNT: 'Your account',
        CURRENT_STATUS: 'Current status',
        CHANGE_STATUS: 'Change status',
        NEW_STATUS: 'New status',

        DEFAULT:'Default',
        STATUS:'Status',
        ALL:'All',
        INITIALISED: 'initialised',
        UNSUBMITTED: 'unsubmitted',
        UNSUBMITTED_IN_PROGRESS: 'unsubmitted (in progress)',
        ACCEPTED: 'accepted',
        AUTO_ACCEPTED: 'auto accepted',
        PARTLY_ACCEPTED: 'partly accepted',
        AUTO_ACCEPTED_AND_ACCEPTED: 'auto accepted and accepted',
        REVIEWED_ACCEPTED: 'reviewed (accepted)',
        REVIEWED_PARTLY_ACCEPTED: 'reviewed (partly accepted)',
        REVIEWED_REJECTED: 'reviewed (rejected)',
        REVIEW_REQUIRED: 'review required',
        REVIEW_REQUESTED: 'review requested',
        REJECTED: 'rejected',
        REVIEW_IN_PROGRESS: 'review in progress',
        UNDER_REVIEW: 'under review',
        UNPUBLISHED: 'unpublished',
        IN_PROGRESS: 'in progress',
        _SUBMITTED: 'submitted',
        REVIEWED: 'reviewed',

        DESCRIPTION_1: 'Title of the project',
        DESCRIPTION_2: 'Name of the lead researcher, his/her position (and his/her lab)',
        DESCRIPTION_3: 'Time scale of the data collection process (range)',
        DESCRIPTION_4: 'Theme and purpose of the study',
        DESCRIPTION_5: 'Describe the procedure of your study (make sure to list, all potentially difficult or distressing actions that you will require from your participants)',
        DESCRIPTION_6: 'Specify the estimated duration of the study, for a single person',
        DESCRIPTION_7: 'List all potential risks and uncomfortable activities which can occur to your participants over the course of the study',
        DESCRIPTION_8: 'List benefits (if applicable)',

        STUDY_DESCRIPTION_INFO: 'This form will be used to automatically generate the informed consent form that every participant of your study will have to sign. Please fill out the English version and optionally the German version. Depending on the language(s), you will receive the informed consent forms for your experiment',
        LANGUAGE_OPTIONS: 'Please select the language, in which you want to generate the informed consent forms',

        DESCRIPTION_1_INFO: '',
        DESCRIPTION_2_INFO: '',
        DESCRIPTION_3_INFO: 'Specify the period during which you will be collecting the data. If you do not know the exact staring and ending dates, specify in \'month-year\' format.',
        DESCRIPTION_4_INFO: 'In a few sentences, describe the theme and purpose of the study (do not get very technical - the content of this box should be understandable to your participants).',
        DESCRIPTION_5_INFO: 'Keep this limited to a few sentences. Do not describe the details of your experimental design, but make sure that you mention all important actions which are required from the participants.',
        DESCRIPTION_6_INFO: 'Try to give a conservative estimate which will be higher then the average completion time. If you have not used a similar procedure in the past, you can run a simple pilot study to estimate this.',
        DESCRIPTION_7_INFO: 'Potential risks include (but are not limited to): walking on stairs, nausea (e.g. in Virtual Reality studies), spending time in confined spaces (e.g. lifts), cycling, operating vehicles (including simple ones like sport equipment), navigating in crowded or heavy-traffic areas, observing quickly changing or blinking stimuli (e.g. in computer-based studies), interacting with potentially strong emotional content (e.g. viewing pictures), wearing any additional electronics (eye-tracker, sensors), any activities that might cause physical effort or pain (e.g. attaching movement sensors to the body).',
        DESCRIPTION_8_INFO: 'For instance a monetary payment, or a lottery voucher.',

        CONCERNS_INFO: 'Complete the checklist below. If you have answered \'yes\' to any of the questions, please provide a brief overview of how you are going to ensure ethical conduct with regard to the given risk. This will be reviewed by the ifgi-Ethics Committee. Remember that any ethical approval granted based on untrue or incomplete disclosure of your research procedure is invalid. The checklist is intended as a guideline and its role is to alert you in cases where you might be proposing an unethical study. Make sure you discuss any concerns with the members of the ifgi\'s Ethics Committee.',

        CONCERN_1: 'Will the study involve potentially vulnerable groups of participants or people who are unable or unauthorized to give informed consent',
        CONCERN_2: 'Will the study involve deception',
        CONCERN_3: 'Will the study involve discussion, judgment or presentation of strongly emotional or sensitive stimuli or topics',
        CONCERN_4: 'Will participants be required to eat or drink any potentially allergic substances',
        CONCERN_5: 'Will you be in the position of power in relation to your participants',
        CONCERN_6: 'Will there be any other live observers present who are invisible to the participant and whose presence will not be disclosed to the participant',
        CONCERN_7: 'Can any element of the procedure cause physical pain or more than mild discomfort',
        CONCERN_8: 'Can the study cause psychological stress, anxiety or negative emotions stronger than what is experienced naturally on an everyday basis outside of research',
        CONCERN_9: 'Will any additional information on your participants be obtained from third parties',
        CONCERN_10: 'Does the procedure involve potential moments when the participant is left without the supervision of a researcher in a potentially challenging or dangerous situation in an uncontrolled environment',
        CONCERN_11_1: 'Does the study involve audio or film recordings potentially identifying participants',
        CONCERN_11_2: 'If yes: Will the study involve any recording without prior consent',
        CONCERN_12: 'Is any raw data from the study likely to be passed on to external partners',
        CONCERN_13: 'Does the study involve collection of any information without obtaining an Informed Consent in a situation different from public observations or anonymous street surveys',

        CONCERN_1_INFO: 'For instance: children and youth under 18yo, participants with impairments, patients, people assisted by a carer, people recruited from groups associated with a specific mental or physical condition.',
        CONCERN_2_INFO: 'That is to say: Will participants be deliberately mislead in such a way that they might show distress or ask to retract their data when debriefed?',
        CONCERN_3_INFO: 'For instance: viewing images involving emotional content that participants might want to avoid, discussing topics related to sexuality, asking personal questions in a publicly exposed environment.',
        CONCERN_4_INFO: '',
        CONCERN_5_INFO: 'That is to say: Does the procedure require you to give orders that participants might hesitate or not wish to perform?',
        CONCERN_6_INFO: '',
        CONCERN_7_INFO: 'For instance: attaching anything to participant\'s body, requiring participants to perform physically demanding gestures or poses, operating equipment.',
        CONCERN_8_INFO: '',
        CONCERN_9_INFO: 'If yes: list those parties, approval to use this data (if applicable) and whether participants will be aware of the data aggregation process.',
        CONCERN_10_INFO: 'For instance: mobile HCI studies in heavy-traffic areas, navigational tasks in-the-wild without following, Virtual Reality studies.',
        CONCERN_11_1_INFO: 'For instance: spoken-aloud personal information, video recording of faces.',
        CONCERN_11_2_INFO: '',
        CONCERN_12_INFO: 'For instance companies, funding bodies, other universities. If yes: who is responsible for the safety of the passed information?',
        CONCERN_13_INFO: 'Excluded cases (select \'no\'): remote sensing data, recordings from public settings allowed by the law, and other situations where the observed individual is expected to be aware of remaining in the public view. Continuous observation of targeted individuals, however, infringes this condition (similarly to how following someone physically in the public is different from observing the same person passing-by).',

        SUBMIT_WARNING: '',

        YES: 'yes',
        NO: 'no',
        EXPLANATION: 'Explanation',
        ENGLISH: 'English',
        GERMAN: 'German',
        PORTUGUESE: 'Portuguese',

        DOWNLOAD_YOUR_FILES: 'Download your files',
        DEBRIEFING_INFORMATION: 'Debriefing information',
        STATEMENT_OF_RESEARCHER: 'Statement of researcher',
        INFORMED_CONSENT_FORM: 'Informed consent form',
        REVISE_DOCUMENT: 'Revise document',

        INTRO: 'Introduction',
        REQUIRED: 'required',
        OPTIONAL: 'optional',
        NAME: 'Name',
        TIME: 'Time',
        RESEARCHER: 'Reseacher(s)',
        PURPOSE: 'Purpose',
        PROCEDURE: 'Procedure',
        DURATION: 'Duration',
        RISKS: 'Risks',
        BENEFITS: 'Benefits',

        YOU: 'You',
        ADMIN: 'admin',
        YOUR_DOCUMENT_NEEDS_TO_BE_REVIEWED: 'Your document needs to be reviewed',
        DOCUMENT_IS_CURRENTLY_UNDER_REVIEW: 'Your document is currently under review',
        DOCUMENT_REVIEWED_SUCCESSFULLY: 'Your document has been reviewed successfully',
        DOCUMENT_PARTLY_ACCEPTED: 'Your document has been partly accepted',
        YOUR_DOCUMENT_HAS_BEEN_REJECTED: 'Your document has been rejected',

        SHOW_SUBMISSION: 'Show submission',
        SHOW_REVIEW: 'Show review',
        SUBMISSION: 'Submission',
        AND: 'and',
        REVIEW: 'Review',
        _REVIEW: 'review',
        OVERVIEW: 'Overview',
        GENERAL: 'General',
        REVISIONS: 'Revisions',
        STUDY_DESCRIPTION: 'Study description',
        STUDY_CONCERNS: 'Study concerns',
        YOUR_DOCUMENT: 'Your document',
        ALL_REVISIONS: 'All revisions',
        LATEST_REVISION: 'Latest revision',
        REV: 'rev',
        SHOW: 'Show',
        HIDE: 'Hide',
        SHOW_DOCUMENT: 'Show document',
        SHOW_HISTORY: 'Show history',
        HIDE_HISTORY: 'Hide history',
        SHOW_COMMENTS: 'Show comments',
        HIDE_COMMENTS: 'Hide comments',
        NOT_USED: 'not used',

        CREATED: 'Created',
        SUBMITTED: 'Submitted',
        REVIEWERS: 'Reviewers',
        LATEST_REVIEWER: 'Latest reviewer',
        GENERAL_COMMENT: 'Comment',
        AUTHOR: 'Author',
        NOTES: 'Notes',
        MEMBERS: 'Members',
        MEMBER: 'Member',
        USERS: 'Users',
        USER: 'User',
        BLOCKED: 'Blocked',
        BLOCKED_USERS: 'Blocked users',
        BLOCKED_USER: 'Blocked user',
        UNIVERSITIES: 'Universities',
        UNIVERSITY: 'University',
        INSTITUTES: 'Institutes',
        INSTITUTE: 'Institute',
        NO_INSTITUTE: 'No institute',
        WORKING_GROUP: 'Working group',
        WORKING_GROUPS: 'Working groups',

        REVIEW_OPTION_1: 'The user gets access to download the files',
        REVIEW_OPTION_2: 'The user has to revise the document and submit it again, until it gets finally accepted',
        REVIEW_OPTION_3: 'The user can no longer access the document. (Attention: Use this option only in extreme situations, for example when your comments have been totally ignored in a revised document. In case of violated rules, you can also block the user). In all other cases, please use the option party accept to give the user the chance to revise the document and submit it again',

        COURSES: 'Courses',
        COURSE: 'Course',
        NO_COURSE: 'No course',
        RELATED_DOCUMENTS: 'Related documents',
        RESPONSIBLE_MEMBERS: 'Responsible members',
        RESPONSIBLE_FORMER_MEMBERS: 'Responsible former members',
        ATTENTION: 'Attention',
        ADMINISTRATOR: 'Administrator',

        SEASON: 'Season',
        LECTURERS: 'Lecturer(s)',

        NONE: 'none',
        COMMITTEE: 'Committee',
        COMMITTEE_MEMBERS: 'Committee members',
        COMMITTEE_MEMBER:'Committee member',
        FORMER_COMMITTEE_MEMBER:'Former committee member',
        FORMER_MEMBERS: 'Former members',
        FORMER_MEMBER: 'Former member',
        OFFICE: 'Office',
        RESPONSIBLE: 'Responsible ',
        CURRENTLY_NOT_RESPONSIBLE: 'Currently not responsible',
        NOT_RESPONSIBLE_ANYMORE: 'Not responsible anymore',
        SUBSCRIBED: 'Subscribed ',
        CURRENTLY_NOT_SUBSCRIBED: 'Currently not subscribed',

        FORMER: 'Former',
        FORMER_INSTITUTES: 'Former institutes',
        FORMER_WORKING_GROUPS: 'Former working groups',
        FORMER_WORKING_GROUP: 'Former working group',
        RELATED_WORKING_GROUPS: 'Related working groups',
        RELATED_FORMER_WORKING_GROUPS: 'Related former working groups',
        RELATED_MEMBERS: 'Related members',
        RELATED_FORMER_MEMBERS: 'Related former members',
        RELATED_USERS: 'Related users',
        RELATED_BLOCKED_USERS: 'Related blocked users',
        RELATED_INSTITUTES: 'Related institutes',
        RELATED_FORMER_INSTITUTES: 'Related former institutes',
        RELATED_COURSES: 'Related courses',

        START_REVIEWING: 'Start reviewing',
        OPEN_REVIEW: 'Open review',
        CLOSE: 'Close',
        _CLOSE: 'close',
        PUBLISH_REVIEW: 'Publish review',
        PARTLY_ACCEPT: 'Partly accept',
        ACCEPT: 'Accept',
        REJECT: 'Reject',

        NEW_COURSE: 'New course',
        EDIT_COURSE: 'Edit course',
        COURSE_NAME: 'Course name',
        YEAR: 'Year',
        TERM: 'Term',
        WINTER: 'Winter',
        SUMMER: 'Summer',
        LECTURER: 'Lecturer(s)',

        EDIT_MEMBER: 'Edit member',
        EDIT_USER: 'Edit user',
        EDIT_UNIVERSITY: 'Edit university',
        EDIT_INSTITUTE: 'Edit institute',
        EDIT_WORKING_GROUP: 'Edit working group',
        TRUE: 'true',
        FALSE: 'false',

        NEW_MEMBER: 'New member',
        NEW_USER: 'New user',
        NEW_UNIVERSITY: 'New university',
        NEW_INSTITUTE: 'New institute',
        NEW_WORKING_GROUP: 'New working group',
        PLEASE_SELECT_AN_UNIVERSITY: 'Please select an university',
        PLEASE_SELECT_AN_INSTITUTE: 'Please select an institute',
        PLEASE_SELECT_A_WORKING_GROUP: 'Please select a working group',

        USERNAME: 'Username',
        OLD_PASSWORD: 'Old password',
        NEW_PASSWORD: 'New password',
        REPEATED_PASSWORD: 'Password repeated',
        NEW_REPEATED_PASSWORD: 'New password repeated',
        ROOM_NUMBER: 'Room number',
        PHONE_NUMBER: 'Phone number',
        OFFICE_ROOM_NUMBER: 'Office (room number)',
        OFFICE_PHONE_NUMBER: 'Office (phone number)',
        OFFICE_EMAIL_ADDRESS: 'Office (email-address)',
        PLEASE_USE_A_UNIVERSITY_NUMBER: 'Please use an official university number',

        EXPLANATION_OF_THE_ADMIN_ROLE: 'If you give a member admin priviliges, he/she has gets full access to all data in the database and he/she can administrate it. As an administrator you can create new universities, insitutes, working groups, members and update or archive them.',
        EXPLANATION_OF_THE_FORMER_STATUS_OF_A_MEMBER: 'With this setting you can archive a member, so the member account is no longer accessible. All data is still be stored in the database. It is the recommended way, because deleting a member also, deletes all related reviews.',
        EXPLANATION_OF_THE_FORMER_STATUS_OF_AN_INSTITUTE: 'With this setting you can archive an insitute, so that the users or members can no longer select it from the lists. All data is still be stored in the database. It is the recommended way, because deleting an institute also, deletes all related working groups, members, users, documents.',
        EXPLANATION_OF_THE_FORMER_STATUS_OF_A_WORKING_GROUP: 'With this setting you can archive a working group, so that the users or members can no longer select it from the lists. All data is still be stored in the database. It is the recommended way, because deleting a working group also, deletes all related working groups, members, users, documents.',
        EXPLANATION_OF_THE_SUBSCRIBED_STATUS: 'With this setting you can turn on/off the email notifications, if a document needs your review. If you are in holiday, you can turn the subscription off and users and members can see that you are currently not responsible for reviewing.',
        EXPLANATION_OF_THE_BLOCKING_STATUS: 'With this setting you can block a user, if he/she clearly violated the rules. The user has then no longer access until you reactivate the account again.',

        OVERWRITING_INFORMATION: 'You are not the latest reviewer! If you continue, you are going to overwrite the review. Please make sure, that you asked the latest reviewer, if he/she is currently not reviewing.',
        OKAY: 'Okay',
        ADMIN_ROLE: 'Admin role',
        SUBSCRIBED_STATUS: 'Subscribed status',
        FORMER_STATUS: 'Former status',
        BLOCKING_STATUS: 'Blocking status',
        MIN_LENGTH: 'Please use a password with a minimum of 14 characters',
        TOO_SHORT: 'Password too short',
        NO_VALID_EMAIL_ADDRESS: 'No valid email-address',
        CHANGE_PASSWORD: 'Change password',
        DO_NOT_CHANGE_PASSWORD: 'Do not change password',

    });

    // Default Language (English)
    $translateProvider.preferredLanguage('en_US');
    $translateProvider.useSanitizeValueStrategy('sanitize');

});
