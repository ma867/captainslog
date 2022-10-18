|Action| URL| HTTP Verb | JSX View Filename | mongoose method |
| ----------- | -------------| --------------| -------------| --------------|
| Index| /logs | GET | Index.jsx | Log.find({}) |
| Show| /logs/:id | GET | Show.jsx | Log.findById(req.params.id)|
| New | /logs/new | GET | New.jsx | none |
| Create | /logs | POST | none | Log.create(req.body)|
| Edit | /logs/:id/edit | GET | Edit.jsx | Log.findById(req.params.id) | 
| Update| /logs/:id | PUT | none | Log.findByIdAndUpdate(req.params.id) |
| Destroy| /logs/:id  | DELETE | none | Log.findByIdAndDelete(req.params.id) |
