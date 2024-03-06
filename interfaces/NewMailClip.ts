/** @format */

export interface NewMailClip {
   selected_email_addresses: "All" | string[];
   word_in_subject: string;
   word_in_body: string;
   email_count_to_display: 1 | 3 | 5;
   push_notification_enabled: boolean;
   inboxes: string[];
   widget_title: string;
}
