```javascript
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  level: { 
    type: String, 
    required: true,
    enum: ['Nursery 1', 'Nursery 2', 'Kindergarten 1', 'Kindergarten 2', 
           'Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5', 'Basic 6',
           'JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3']
  },
  parentName: { type: String, required: true },
  parentEmail: { type: String, required: true },
  parentPhone: { type: String, required: true },
  address: { type: String, required: true },
  photo: { type: String },
  admissionDate: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Student', StudentSchema);
```
