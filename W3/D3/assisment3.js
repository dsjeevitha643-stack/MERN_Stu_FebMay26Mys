 //JSON Settings Merge

function mergeSettings(savedSettingsJSON, defaultSettings) {

    // Convert JSON string to object
    const savedSettings = JSON.parse(savedSettingsJSON);

    // Create merged object starting with default settings
    const merged = { ...defaultSettings };

    // Override with saved settings
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }

    // Return merged object and JSON string
    return {
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
}

const defaultSettings = {
    theme: "light",
    notifications: true,
    language: "en"
};

const savedSettingsJSON = '{"theme":"dark","language":"fr"}';

const result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log(result.mergedObject);
console.log(result.mergedJSON);