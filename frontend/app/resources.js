passKeeperApp.factory('User', function($resource) {
    return $resource('/user/:id.json', { id: '@_id' }, {
        save: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        update: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        delete: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }); // Note the full endpoint address
});