const { isNil, cloneDeep, isEmpty } = require('lodash')
const candidates = [
  {
    id: '1',
    name: 'Maxwell Cornet',
    skills: ['nodejs', 'socketio', 'redis', 'mongodb'],
  },
  {
    id: '2',
    name: 'Raheem Sterling',
    skills: ['scala', 'go', 'nodejs', 'ember'],
  },
  {
    id: '3',
    name: 'Robert Lewandowski',
    skills: ['scala', 'go', 'elixir'],
  },
  {
    id: '4',
    name: 'Adama Traore',
    skills: ['elasticsearch', 'go', 'aws', 'tensorflow'],
  },
]

module.exports = (api) => {
  api.post('/candidates', (req, res) => {
    try {
      const { id, name, skills } = req.body

      if (isNil(id)) {
        return res.status(400).send('ID missing in request payload')
      }

      if (isNil(name)) {
        return res.status(400).send('Name missing in request payload')
      }

      if (isNil(skills)) {
        return res.status(400).send('Skills missing in request payload')
      }

      req.body.skills = req.body.skills.map((s) => s.toLowerCase())
      candidates.push(req.body)

      return res.status(200).send('Success')
    } catch (err) {
      return res.status(400).send(`Error occured - ${err.message}`)
    }
  })

  api.get('/candidates/search', (req, res) => {
    try {
      const { skills } = req.query

      if (isNil(skills)) {
        return res.status(400).send('Skills missing in request query')
      }

      if (candidates.length < 1) {
        return res.status(404).send('No candidates registered yet')
      }

      const requestedSkills = skills.toLowerCase().split(',')

      if (isNil(requestedSkills)) {
        return res.status(400).send('Skills missing in request query')
      }

      const clonedCandidates = cloneDeep(candidates)

      const skillMatchCount = clonedCandidates
        .map((c) => {
          c.found = 0
          c.skills.forEach((s) => {
            if (requestedSkills.includes(s)) c.found++
          })
          return c.found
        })
        .filter((c) => c > 0)

      if (isEmpty(skillMatchCount)) {
        return res.status(404).send('No candidates match the search criteria')
      }

      const bestCandidateIndex = getMaxSkillCountIndex(skillMatchCount)
      const bestCandidate = candidates[bestCandidateIndex]

      return res.status(200).json(bestCandidate)
    } catch (err) {
      return res.status(400).send(`Error occured - ${err.message}`)
    }
  })
  function getMaxSkillCountIndex(arr) {
    if (arr.length === 0) {
      return -1
    }

    var max = arr[0]
    var maxIndex = 0

    arr.forEach((a, i) => {
      if (a > max) {
        maxIndex = i
        max = a
      }
    })

    return maxIndex
  }
}
