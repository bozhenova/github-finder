export class GitHub {
  constructor() {
    this.access_token = `361e08ad72b94610be5c6cda4e6c7c52740d40ca`;
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      {
        headers: {
          Authorization: `Bearer ${this.access_token}`
        }
      }
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      {
        headers: {
          Authorization: `Bearer ${this.access_token}`
        }
      }
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
