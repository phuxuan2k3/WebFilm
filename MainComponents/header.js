export default {
    data() {
        return {
        }
    }
    ,
    template: `
        <div class="alert text-center alert-light d-flex justify-content-between align-items-center">
            <span>21120170</span>
            <span class="fw-bold fs-4">Movies info</span>
            <div>
                <span>21170</span>
                <div class="form-check form-switch">
                    <input class="form-check-input" @click="$emit('toggleDarkMode')" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label   class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
        </div>
        `
}