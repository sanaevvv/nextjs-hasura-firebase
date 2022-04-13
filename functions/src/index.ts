import * as functions from "firebase-functions"
import * as admin from "firebase-admin"

admin.initializeApp()

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  const customClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'stuff',
      'x-hasura-allowed-roles': ['stuff'],
      'x-hasura-user-id': user.uid,
    },
  }
  try {
    await admin.auth().setCustomUserClaims(user.uid, customClaims)
    await admin.firestore().collection('user_meta').doc(user.uid).create({
      refetchTime: admin.firestore.FieldValue.serverTimestamp()
    })
    } catch (error) {
      console.error(error)
    }
})
