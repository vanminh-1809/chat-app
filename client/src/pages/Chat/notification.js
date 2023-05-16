export const pushNotifications = (data) => {
    new Notification('Cong Chat App', {
        body: data,
      })
}