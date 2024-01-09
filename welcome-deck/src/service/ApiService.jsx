const BASE_URL = "http://localhost:8585";

const apiService = {
  fetchIbus: async () => {
    try {
      const response = await fetch(`${BASE_URL}/ibu/ibulist`);
      if (!response.ok) {
        throw new Error("Failed to fetch IBUs");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  fetchManager: async () => {
    try {
      const response = await fetch(`${BASE_URL}/manager/managerlist`);
      if (!response.ok) {
        throw new Error("Failed to fetch Manager");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  fetchEmployees: async () => {
    try {
      const response = await fetch(`${BASE_URL}/employee/all`);
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  fetchEmployeeById: async (employeeId) => {
    try {
      const response = await fetch(`${BASE_URL}/employee/find/${employeeId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // updateEmployeeIbu: async (updatedEmployeeDetails) => {
  //   try {
  //     const response = await axios.put(
  //       `${BASE_URL}/employee/update/${updatedEmployeeDetails.id}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to update employee IBU");
  //     }

  //     return await response.json();
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // },

  addEmployee: async (employeeDetails) => {
    try {
      const response = await fetch(`${BASE_URL}/employee/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },

    addProfilePicture: async (imageFile) => {
      try {
        const response = await fetch(`${BASE_URL}/image/upload`, {
          method: "POST",
          body: imageFile,
        });
    
        if (!response.ok) {
          throw new Error("Failed to add profile picture");
        }
    
        // Check if the response is text or something other than JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("text")) {
          return await response.text(); // Handle text response
        } else {
          return await response.json(); // Handle JSON response
        }
      } catch (error) {
        throw new Error(error.message);
      }
    },
    

    getImageById: async (id) => {
      try {
        const response = await fetch(`${BASE_URL}/image/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
      } catch (error) {
        console.error("Error fetching image:", error);
        return null;
      }
    },
  
};

export default apiService;
