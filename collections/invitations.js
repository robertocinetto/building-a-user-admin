Invitation = new Meteor.Collection( 'invitations' );

Invitation.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Invitation.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let InvitationSchema = new SimpleSchema({
  email: {
    type: String,
    label: "email to send invitation to."
  },
  token: {
    type: String,
    label: "Invitation token."
  },
  role: {
    type: String,
    label: "Role to apply to the user."
  },
  date: {
    type: String,
    label: "Invitation Date."
  }
});

Invitation.attachSchema( InvitationSchema );