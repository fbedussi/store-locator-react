export default {
    stores: [],
    storeTypes: [],
    locations: [],
    ui: {
        filterPanelOpen: false,
        resultPanelOpen: true,
        searchLayerOpen: false,
    },
    searchTerm: '',
    openedStore: null,
    filters: {
        continent: '',
        country: '',
        city: '',
        coordinates: {
            center: {
                lat: '',
                lng: ''
            },
            ne: {
                lat: '',
                lng: ''
            },
            sw: {
                lat: '',
                lng: ''
            }
        },
        storeTypes: []
    }
}